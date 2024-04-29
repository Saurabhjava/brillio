import { Component } from "react";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      country: "",
    };
  }
  hasndleUserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  hasndleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  hasndleCountry = (event) => {
    this.setState({
      country: event.target.value,
    });
  };
  handleSubmit = (event) => {
    document.getElementById(
      "d1"
    ).innerHTML = `<tr><td>${this.state.userName}</td><td>${this.state.email}</td><td>${this.state.country}</td>`;
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserName</label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.hasndleUserName}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.hasndleEmail}
            />
          </div>
          <div>
            <label>Country</label>
            <select value={this.state.country} onChange={this.hasndleCountry}>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Dubai">Dubai</option>
              <option value="Austrelia">Austrelia</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        <table className="table table-bordered">
          <tbody id="d1"></tbody>
        </table>
      </div>
    );
  }
}
