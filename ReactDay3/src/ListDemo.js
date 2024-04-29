import Employee from "./Employee";

function ListDemo() {
  //const names = ["Amit", "Chirag", "Pradip", "Amit"];
  //const name = names.map((n) => <h2>{n}</h2>);
  const employees = [
    { empid: 101, name: "Chirag", salary: 145000 },
    { empid: 102, name: "Amit", salary: 135000 },
    { empid: 103, name: "Raj", salary: 125000 },
    { empid: 104, name: "Amit", salary: 175000 },
  ];
  const empList = employees.map((emp) => (
    <Employee key={emp.empid} emp={emp} />
  ));
  return (
    <table className="table table-bordered">
      <tbody>{empList}</tbody>
    </table>
  );
}
export default ListDemo;
