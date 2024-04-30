import { Component } from "react";
import { RegularComponent } from "./RegularComponent";
import { PureComponent } from "./PureComponent";
import MempComp from "./MemoComponent";

export class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Saurabh",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Saurabh",
      });
    }, 2000);
  }
  render() {
    console.log("************Main Component*********");
    return (
      <div>
        Main Component
        <RegularComponent name={this.state.name} />
        {/* <PureComponent name={this.state.name} /> */}
        <MempComp name={this.state.name} />
      </div>
    );
  }
}
