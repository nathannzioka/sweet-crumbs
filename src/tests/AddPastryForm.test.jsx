import { render, screen } from "@testing-library/react";
import AddPastryForm from "../components/AddPastryForm";

test("renders add pastry form", () => {
  render(<AddPastryForm />);

  expect(screen.getByText(/add pastry/i)).toBeInTheDocument();
});