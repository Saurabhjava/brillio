import { shallow } from "enzyme";
import About from "../About";
describe("Testing About Component", () => {
  let myComp;
  beforeEach(() => {
    myComp = shallow(<About />);
  });
  if (
    ("Testing para text",
    () => {
      expect(myComp.find("p").text()).toBe("For Testing!");
    })
  );
});
