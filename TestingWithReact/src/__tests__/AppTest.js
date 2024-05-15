import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("React Training");
  const linkElement1 = screen.getByText(/Saurabh Kumar Sharma/);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement1).toBeInTheDocument();
});
