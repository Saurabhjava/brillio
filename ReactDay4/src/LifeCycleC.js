import { Component } from "react";
import { LifeCycleChild } from "./LifeCycleChild";

export class LifeCycleC extends Component {
  constructor() {
    super();
    this.state = {
      name: "Saurabh",
    };
    console.log("LifeCycleC Constructor!!");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleC getDerivedStateFromProps called!!");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleC componentDidMount");
  }
  render() {
    console.log("LifeCycleC Rendered");
    return <div>LifeCycleC Rendered</div>;
  }
}
