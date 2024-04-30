import { Component } from "react";
import UpdatedComponent from "./UpdatedComponent";

class HoverCounter extends Component {
  render() {
    return (
      <h2 onMouseOver={this.props.incrementCount}>
        Hovered {this.props.count} Times
      </h2>
    );
  }
}
export default UpdatedComponent(HoverCounter);
