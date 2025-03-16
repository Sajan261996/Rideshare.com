import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app correctly", () => {
  render(<App />);
  
  // Instead of "learn react", find something that actually exists in the UI
  expect(screen.getByText(/pooja box/i)).toBeInTheDocument();
});