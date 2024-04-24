import React from "react";

function MyComp() {
  return (
    <div style={{ color: "blue" }}>
      <h1>Hello Component</h1>
    </div>
  );
  /*return React.createElement(
    "div",
    { style: { color: "blue" } },
    React.createElement("h1", null, "Hello Component")
  );*/
}

export default MyComp;
