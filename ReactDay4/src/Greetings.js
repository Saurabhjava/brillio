import { Component } from "react";

export class Greetings extends Component {
  constructor() {
    super();
    this.state = {
      isLoginStatus: true,
    };
  }
  render() {
    // let msg;
    // if (this.state.isLoginStatus) {
    //   msg = <div>Welcome Saurabh</div>;
    // } else {
    //   msg = <div>Welcome User. You have not Logged in</div>;
    // }
    // return this.state.isLoginStatus ? (
    //   <div>Welcome Saurabh</div>
    // ) : (
    //   <div>Welcome User. You have not Logged in</div>
    // );
    return this.state.isLoginStatus && <div>Welcome Saurabh</div>;
  }
}
