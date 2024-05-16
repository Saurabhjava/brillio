import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";

test("Counter test case", () => {
  render(<Counter />);
  const countValue = screen.getByTestId("counterDisplay");
  //const btn = screen.getByTestId("b1");
  const btn = screen.getByText("+");
  const btn1 = screen.getByTestId("b2");
  fireEvent.click(btn);
  fireEvent.click(btn);
  expect(countValue).toHaveTextContent(2);
  fireEvent.click(btn1);
  expect(countValue).toHaveTextContent(1);
});
