import { Component } from "react";
import axios from "axios";

export class PostList extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      errorMsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/employees")
      .then((response) => {
        console.log(response);
        this.setState({
          userData: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          errorMsg: "Error in fatching data",
        });
      });
  }
  deleteEmployee = (eid) => {
    axios
      .delete(`http://localhost:8080/employees/${eid}`)
      .then((response) => {
        this.setState({ userData: response.data });
      })
      .catch((error) => {
        this.setState({
          errorMsg: "Error in Deleting data",
        });
      });
  };
  render() {
    const { userData, errorMsg } = this.state;
    const title = userData.length
      ? userData.map((employee) => (
          <tr key={employee.empid}>
            <td>{employee.empid}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.dob}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => this.deleteEmployee(employee.empid)}
              >
                delete
              </button>
            </td>
          </tr>
        ))
      : errorMsg;
    return (
      <div>
        <table className="table table-bordered">
          <tbody>{title}</tbody>
        </table>
      </div>
    );
  }
}
