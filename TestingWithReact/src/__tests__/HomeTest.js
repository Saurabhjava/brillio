import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../Home";
import UserList from "../UserList";

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

test("Testing Home component for div text", () => {
  render(<Home />);
  const div = screen.getByText("Home Component", { exact: true });
  expect(div).toBeInTheDocument();
});

test("Click Event test case", () => {
  render(<Home />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Text changed on Button Click")).toBeInTheDocument();
});

test("Props test case", () => {
  const myName = "Rajesh";
  render(<Home name={myName} />);
  const user = screen.getByText(`Your Name: ${myName}`);
  expect(user).toBeInTheDocument();
});
