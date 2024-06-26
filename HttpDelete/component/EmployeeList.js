function EmployeeList(props) {
  console.log(props.employees);
  return (
    <div>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>EmployeeID</th>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
          {props.employees.map((employee) => (
            <tr key={employee.empid}>
              <td>{employee.empid}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.dob}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => props.delEmployee(employee.empid)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
