import { Component } from "react";

export class ProductClass extends Component {
  render() {
    const { name, price, children } = this.props;
    return (
      <div
        style={{
          border: "solid blue",
          height: "90px",
          width: "120px",
          fontSize: "6pt",
        }}
      >
        <p>ProductName: {name} </p>
        <p>Price: INR {price}</p>
        <p>{children}</p>
      </div>
    );
  }
}
