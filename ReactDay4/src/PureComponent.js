import React from "react";

export class PureComponent extends React.PureComponent {
  render() {
    console.log("************Pure Component*********");
    return (
      <div>
        Pure Component
        <h3>Hello {this.props.name}</h3>
      </div>
    );
  }
}
