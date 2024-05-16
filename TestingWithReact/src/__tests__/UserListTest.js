import { render, screen } from "@testing-library/react";
import UserList from "../UserList";

test("UserList Test", async () => {
  render(<UserList />);
  const ulist = await screen.findAllByRole("listitem");
  expect(ulist).toHaveLength(10);
  const textData = screen.getByText("Leanne Graham");
  expect(textData).toBeInTheDocument();
});
