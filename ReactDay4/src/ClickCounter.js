import { Component } from "react";
import UpdatedComponent from "./UpdatedComponent";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          Click Counter {this.props.count}
        </button>
      </div>
    );
  }
}
export default UpdatedComponent(ClickCounter);
