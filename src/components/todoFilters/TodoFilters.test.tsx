import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoFilters } from "./TodoFilters";

describe("TodoFilters", () => {
  it("renders all filter buttons", () => {
    render(<TodoFilters filter="all" setFilter={() => {}} />);
    expect(screen.getByRole("button", { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /active/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /completed/i })
    ).toBeInTheDocument();
  });

  it("highlights the active filter button", () => {
    render(<TodoFilters filter="active" setFilter={() => {}} />);
    const activeButton = screen.getByRole("button", { name: /active/i });
    expect(activeButton.className).toMatch(/active/);
  });

  it("calls setFilter with the correct value when a button is clicked", async () => {
    const setFilter = vi.fn();
    render(<TodoFilters filter="all" setFilter={setFilter} />);
    const completedButton = screen.getByRole("button", { name: /completed/i });
    await userEvent.click(completedButton);
    expect(setFilter).toHaveBeenCalledWith("completed");
  });
});
