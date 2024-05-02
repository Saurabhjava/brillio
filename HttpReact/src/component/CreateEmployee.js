import axios from "axios";
import { useState } from "react";

function CreateEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    dob: "",
  });
  const [msg, setMsg] = useState("");
  const changeHandler = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(employee);
    axios
      .post("http://localhost:8080/employees", employee)
      .then((response) => {
        console.log(response);
        if (response.status === 201) setMsg("Employee Created");
        else setMsg("Employee Not Created");
      })
      .catch((error) => {
        console.log(error);
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
      <p>{msg}</p>
    </div>
  );
}
export default CreateEmployee;
