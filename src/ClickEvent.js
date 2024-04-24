import { Component } from "react";

export class ClickEvent extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome To My Page!",
    };
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent() {
    this.setState({
      message: "Thank you for your visit",
    });

    console.log(this.state.message);
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={() => this.handleEvent()}>Click Me</button> */}
        {/* <button onClick={this.handleEvent.bind(this)}>Click Me</button> */}
        <button onClick={this.handleEvent}>Click Me</button>
      </div>
    );
  }
}
