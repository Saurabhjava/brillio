import { Component } from "react";

export class ChildComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.myprops("Child")}>ClickButton</button>
      </div>
    );
  }
}
