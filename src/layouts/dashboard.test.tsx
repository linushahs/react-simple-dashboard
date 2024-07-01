import { render, screen, waitFor } from "@testing-library/react";
import useQuery from "hooks/useQuery";
import { vi } from "vitest";
import Dashboard from "./Dashboard";

// Mock the DataTable component
vi.mock("components/table/datatable", () => ({
  default: (props: any) => (
    <div data-testid="DataTable">{JSON.stringify(props.data)}</div>
  ),
}));

// Mock the useQuery hook
vi.mock("hooks/useQuery");
const mockedUseQuery = vi.mocked(useQuery, true);

describe("Dashboard component", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("Dashboard renders loading state initially", () => {
    mockedUseQuery.mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
      error: null,
    });

    render(<Dashboard />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("Dashboard renders error state", async () => {
    const errorMessage = "Network Error";
    mockedUseQuery.mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
      error: { message: errorMessage },
    });

    render(<Dashboard />);

    await waitFor(() =>
      expect(
        screen.getByText(`Error loading data: ${errorMessage}`)
      ).toBeInTheDocument()
    );
  });

  it("Dashboard renders data state with DataTable", async () => {
    const products = [
      {
        id: 1,
        product_name: "Product 1",
        price: 25,
        rating: 4.5,
        brand: "Brand 1",
        availability: "In stock",
      },
      {
        id: 2,
        product_name: "Product 2",
        price: 50,
        rating: 5.5,
        brand: "Brand 2",
        availability: "Not in stock",
      },
    ];

    mockedUseQuery.mockReturnValue({
      data: products,
      isLoading: false,
      isError: false,
      error: null,
    });

    render(<Dashboard />);

    await waitFor(() =>
      expect(screen.getByTestId("DataTable")).toBeInTheDocument()
    );
  });
});
