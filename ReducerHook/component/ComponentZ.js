import { useContext } from "react";
import { MyContext, UserContext } from "../App";

function ComponentZ() {
  const userName = useContext(UserContext);
  const techData = useContext(MyContext);
  return (
    <div>
      ComponentZ is Rendered!
      <h5>
        Hello {userName} You are {techData}
      </h5>
    </div>
  );
}
export default ComponentZ;
