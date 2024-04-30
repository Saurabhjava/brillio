import { Component } from "react";
import { LifeCycleChild } from "./LifeCycleChild";
import { LifeCycleC } from "./LifeCycleC";

export class LifeCycleTest extends Component {
  constructor() {
    super();
    this.state = {
      name: "Saurabh",
    };
    console.log("LifeCycleTest Constructor!!");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleTest getDerivedStateFromProps called!!");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleTest componentDidMount");
  }
  render() {
    console.log("LifeCycleTest Rendered");
    return (
      <div>
        <div>LifeCycleTest Rendered</div>
        <LifeCycleChild />
        <LifeCycleC />
      </div>
    );
  }
}
