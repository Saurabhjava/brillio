import { useContext } from "react";
import { MyContext, UserContext } from "../App";

function ComponentB() {
  const userName = useContext(UserContext);
  const techData = useContext(MyContext);
  return (
    <div style={{ border: "solid" }}>
      ComponentB is Rendered!
      <h5>
        Hello {userName} You are {techData}
      </h5>
    </div>
  );
}
export default ComponentB;
