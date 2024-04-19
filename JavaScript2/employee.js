class Employee {
  constructor(eid, name, email) {
    this.eid = eid;
    this.name = name;
    this.email = email;
  }

  displayEmployee() {
    console.log("Employee Id " + this.eid);
    console.log("Employee Name " + this.name);
    console.log("Employee Email " + this.email);
  }
}
var obj = new Employee(101, "Raj", "rah@gmail.com");
console.log(obj);
obj.displayEmployee();
export default Employee;
