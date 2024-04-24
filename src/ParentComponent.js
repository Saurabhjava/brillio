import { Component } from "react";
import { ChildComponent } from "./ChildComponent";

export class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      parentName: "Parent",
    };
    this.callParent = this.callParent.bind(this);
  }
  callParent(data) {
    alert(`Hello ${this.state.parentName} from ${data}`);
  }
  render() {
    return (
      <div>
        <ChildComponent myprops={this.callParent} />
      </div>
    );
  }
}
