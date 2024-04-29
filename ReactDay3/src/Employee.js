function Employee(props) {
  return (
    <tr>
      <td>{props.emp.empid}</td>
      <td>{props.emp.name}</td>
      <td>{props.emp.salary}</td>
    </tr>
  );
}
export default Employee;
