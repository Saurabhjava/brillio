import { Component } from "react";

export class RegularComponent extends Component {
  render() {
    console.log("************Regular Component*********");
    return (
      <div>
        Regular Component
        <h3>Hello {this.props.name}</h3>
      </div>
    );
  }
}
