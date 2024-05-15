import calulate from "./calculator";

test("test1 calculate function", () => {
  expect(calulate(10, 5)).toBe(15);
});

test("test2 calculate function", () => {
  expect(calulate(20, 15)).toBe(35);
});
