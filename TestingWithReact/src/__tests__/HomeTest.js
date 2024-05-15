import { render, screen } from "@testing-library/react";
import Home from "../Home";

test("renders text on Home Component", () => {
  render(<Home />);
  const linkElement = screen.getByText("Home Component");
  expect(linkElement).toBeInTheDocument();
});

test("Image title test", () => {
  render(<Home />);
  const title = screen.getByTitle("AI Image");
  const alt = screen.getByAltText("Img Not Available");
  expect(title).toBeInTheDocument();
  expect(alt).toBeInTheDocument();
});

test("Testing Input field", () => {
  render(<Home />);
  let inputBox = screen.getByTestId("t2");
  //expect(inputBox).toHaveAttribute("id", "t1");
  expect(inputBox).toBeInTheDocument();
  expect(inputBox).toHaveAttribute("name", "password");
});
