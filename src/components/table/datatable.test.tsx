import { generateMockData } from "utils/helpers";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import DataTable from "./datatable";

// Mock the useSkipper
vi.mock("hooks/useSkipper", () => ({
  default: () => [true, vi.fn()],
}));

// Mock the table_filters
vi.mock("./table_filters", () => ({
  default: () => <div data-testid="table-filters">Table Filters</div>,
}));

// Generate mock data
const mockData = generateMockData();

describe("DataTable", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the table with correct headers", () => {
    render(<DataTable data={mockData} />);

    expect(screen.getByText("Product Name")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Rating")).toBeInTheDocument();
    expect(screen.getByText("Brand")).toBeInTheDocument();
    expect(screen.getByText("Availability")).toBeInTheDocument();
  });

  it("renders the correct number of rows", () => {
    render(<DataTable data={mockData} />);

    const rows = screen.getAllByRole("row");
    // +1 for header row
    expect(rows.length).toBe(11 + (mockData.length % 10));
  });

  it('displays "No products found" when data is empty', () => {
    render(<DataTable data={[]} />);

    expect(screen.getByText("No products found")).toBeInTheDocument();
  });

  it("allows sorting when clicking on sortable column headers", async () => {
    render(<DataTable data={mockData} />);

    const productNameHeader = screen.getByText("Product Name");
    fireEvent.click(productNameHeader);

    // Check if the first product name is now "Product 1" (sorted ascending)
    const firstProductName = screen.getAllByRole("row")[1].querySelector("td");
    expect(firstProductName).toHaveTextContent("Product 1");

    // Click again to sort descending
    fireEvent.click(productNameHeader);
    await waitFor(() => {
      const firstProductNameAfterSecondClick = screen
        .getAllByRole("row")[1]
        .querySelector("td");
      expect(firstProductNameAfterSecondClick).toHaveTextContent("Product 2");
    });
  });

  it("allows pagination", async () => {
    const user = userEvent.setup();
    render(<DataTable data={mockData} />);

    const nextButton = screen.getByText("Next");
    const previousButton = screen.getByText("Previous");

    expect(previousButton).toBeDisabled();
    expect(nextButton).toBeEnabled();

    await user.click(nextButton);

    expect(previousButton).toBeEnabled();
    expect(nextButton).toBeDisabled();
  });
});
