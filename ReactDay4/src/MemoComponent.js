import React from "react";

function MempComp(props) {
  console.log("Pure Component With Method called Memo comp");
  return (
    <React.Fragment>
      Pure Component With Method
      <h3>Hello {props.name}</h3>
    </React.Fragment>
  );
}

export default React.memo(MempComp);
