import { Component } from "react";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      emp: { userName: "", email: "", country: "" },
      employees: [],
    };
  }
  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      emp: {
        ...this.state.emp,
        [name]: value,
      },
    });
  };
  handleSubmit = (event) => {
    // this.setState({
    //   employees: [...this.state.employees, this.state.emp],
    // });
    const emps = this.state.employees;
    emps.push(this.state.emp);
    this.setState({
      employees: emps,
    });
    event.preventDefault();
  };
  render() {
    const empData = this.state.employees.map((e) => (
      <tr>
        <td>{e.userName}</td>
        <td>{e.email}</td>
        <td>{e.country}</td>
      </tr>
    ));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserName</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={this.state.emp.userName}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={this.state.emp.email}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Country</label>
            <select
              value={this.state.emp.country}
              className="form-control"
              name="country"
              onChange={this.changeHandler}
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Dubai">Dubai</option>
              <option value="Austrelia">Austrelia</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        <table className="table table-bordered">
          <tbody>{empData}</tbody>
        </table>
        <h1>{this.data}</h1>
      </div>
    );
  }
}
