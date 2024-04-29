import { Component } from "react";

export class LifeCycleChild extends Component {
  constructor() {
    super();
    this.state = {
      name: "Saurabh",
    };
    console.log("LifeCycleChild Constructor!!");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleChild getDerivedStateFromProps called!!");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleChild componentDidMount");
  }
  render() {
    console.log("LifeCycleChild Rendered");
    return <div>LifeCycleChild Rendered</div>;
  }
}
