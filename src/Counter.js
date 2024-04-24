import { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  callbackMethod(value) {
    alert(`State changed with ${value}`);
  }
  increment() {
    this.setState(
      (preState) => ({
        count: preState.count + 1,
      }),
      this.callbackMethod(this.state.count)
    );
    console.log(this.state.count);
  }
  incrementByFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incrementByFive()}>IncrementBy5</button>
      </div>
    );
  }
}
