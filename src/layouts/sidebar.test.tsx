import { render, screen } from "@testing-library/react";
import { ButtonProps } from "components/button";
import { vi } from "vitest";
import Sidebar from "./Sidebar";

vi.mock("assets", () => ({
  CreditUsageIcon: vi.fn(() => <svg data-testid="CreditUsageIcon" />),
  DatasetsIcon: vi.fn(() => <svg data-testid="DatasetsIcon" />),
  WorkflowIcon: vi.fn(() => <svg data-testid="WorkflowIcon" />),
}));

// Mock the Button component
vi.mock("components/button", () => ({
  __esModule: true,
  default: (props: ButtonProps) => <button {...props}>{props.children}</button>,
}));

describe("Sidebar component", () => {
  beforeEach(() => {
    render(<Sidebar />);
  });

  test("renders title correctly", () => {
    const title = screen.getByText("Grepsr");
    expect(title).toBeInTheDocument();
  });

  test("renders menu items with icons and titles", () => {
    const datasetsIcon = screen.getByTestId("DatasetsIcon");
    const workflowsIcon = screen.getByTestId("WorkflowIcon");
    const creditUsageIcon = screen.getByTestId("CreditUsageIcon");

    expect(datasetsIcon).toBeInTheDocument();
    expect(screen.getByText("Datasets")).toBeInTheDocument();

    expect(workflowsIcon).toBeInTheDocument();
    expect(screen.getByText("Workflows")).toBeInTheDocument();

    expect(creditUsageIcon).toBeInTheDocument();
    expect(screen.getByText("Credit usage")).toBeInTheDocument();
  });

  test("renders help section with button", () => {
    const helpText = screen.getByText("Need any help?");
    const supportButton = screen.getByRole("button", {
      name: "Contact Support",
    });

    expect(helpText).toBeInTheDocument();
    expect(supportButton).toBeInTheDocument();
  });
});
