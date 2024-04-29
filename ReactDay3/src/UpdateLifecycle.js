import { Component } from "react";

export class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
    document.getElementById(
      "a"
    ).innerHTML = `You have Clicked ${this.state.count} times`;
  }
  componentDidUpdate(preProps, preState) {
    document.title = `Clicked ${this.state.count} times`;
    document.getElementById(
      "a"
    ).innerHTML = `You have Clicked ${this.state.count} times`;
  }
  render() {
    return (
      <div>
        <h1 id="a"></h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}
