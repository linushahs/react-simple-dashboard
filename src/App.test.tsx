import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";

// Mock the child components
vi.mock("./layouts/Sidebar", () => ({
  default: () => <div data-testid="Sidebar">Sidebar</div>,
}));

vi.mock("./layouts/Topbar", () => ({
  default: () => <div data-testid="Topbar">Topbar</div>,
}));

vi.mock("./layouts/Dashboard", () => ({
  default: () => <div data-testid="Dashboard">Dashboard</div>,
}));

describe("App component", () => {
  test("renders Sidebar, Topbar, and Dashboard", () => {
    render(<App />);

    // Check if Sidebar is rendered
    expect(screen.getByTestId("Sidebar")).toBeInTheDocument();

    // Check if Topbar is rendered
    expect(screen.getByTestId("Topbar")).toBeInTheDocument();

    // Check if Dashboard is rendered
    expect(screen.getByTestId("Dashboard")).toBeInTheDocument();
  });
});
