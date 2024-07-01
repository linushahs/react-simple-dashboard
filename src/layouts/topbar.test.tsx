import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import Topbar from "./Topbar";

// Mock the icon components
vi.mock("assets", () => ({
  BackArrowIcon: vi.fn(() => <svg data-testid="BackArrowIcon" />),
  CreditIcon: vi.fn(() => <svg data-testid="CreditIcon" />),
  InfiniteIcon: vi.fn(() => <svg data-testid="InfiniteIcon" />),
  InfoIcon: vi.fn(() => <svg data-testid="InfoIcon" />),
  NotificationIcon: vi.fn(() => <svg data-testid="NotificationIcon" />),
}));

describe("Topbar component", () => {
  it("renders Topbar component correctly", () => {
    render(<Topbar />);

    // Check if icons are rendered
    expect(screen.getByTestId("BackArrowIcon")).toBeDefined();
    expect(screen.getByTestId("CreditIcon")).toBeDefined();
    expect(screen.getByTestId("InfiniteIcon")).toBeDefined();
    expect(screen.getByTestId("InfoIcon")).toBeDefined();
    expect(screen.getByTestId("NotificationIcon")).toBeDefined();

    // Check if text is rendered correctly
    expect(screen.getByText("Amazon product price")).toBeDefined();
    expect(screen.getByText(/Credit usage: 1018 \//)).toBeDefined();

    // Check if image is rendered
    const userImage = screen.getByRole("img");
    expect(userImage).toHaveProperty(
      "src",
      "https://randomuser.me/api/portraits/women/67.jpg"
    );
  });
});
