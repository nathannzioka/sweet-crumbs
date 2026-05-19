import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../components/Search";

test("updates search input", () => {
  const setSearch = vi.fn();

  render(<Search search="" setSearch={setSearch} />);

  const input = screen.getByPlaceholderText(/search pastries/i);

  fireEvent.change(input, {
    target: { value: "Chocolate" }
  });

  expect(setSearch).toHaveBeenCalledWith("Chocolate");
});