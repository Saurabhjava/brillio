import axios from "axios";
import { useEffect, useState } from "react";
import { PostList } from "./GetRequestWithAxios";
import EmployeeList from "./EmployeeList";

function CreateEmployee() {
  const [employee, setEmployee] = useState({
    empid: "",
    name: "",
    email: "",
    dob: "",
  });
  const [msg, setMsg] = useState("");
  const [empList, setEmpList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/employees")
      .then((response) => {
        console.log(response.data);
        setEmpList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const changeHandler = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(employee);
    axios
      .post("http://localhost:8080/employees", employee)
      .then((response) => {
        setEmpList([...empList, response.data]);
      })
      .catch((error) => {
        setMsg(error);
      });
  };

  const deleteEmployee = async (eid) => {
    let empData = [];
    empList.map((e) => empData.push(e));
    axios
      .delete(`http://localhost:8080/employees/${eid}`)
      .then((response) => {
        for (let i = 0; i < empData.length; i++) {
          if (empData[i].empid === response.data.empid) {
            empData.splice(i, 1);
            setEmpList(empData);
            break;
          }
        }
      })
      .catch((error) => {
        setMsg(error);
      });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={employee.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={employee.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>DOB</label>
          <input
            type="text"
            className="form-control"
            name="dob"
            value={employee.dob}
            onChange={changeHandler}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
      <EmployeeList employees={empList} delEmployee={deleteEmployee} />
      <p>{msg}</p>
    </div>
  );
}
export default CreateEmployee;
