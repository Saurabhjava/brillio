import Employee from "./employee.js";

class Manager extends Employee {
  constructor(eid, name, email, dept) {
    super(eid, name, email);
    this.dept = dept;
  }
  printEmployee() {
    console.log("EmployeeId: " + this.eid);
    console.log("EmployeeName: " + this.name);
    console.log("Email: " + this.email);
    console.log("Deprtment: " + this.dept);
  }
}

var obj = new Manager(123, "Raj", "raj@gmail.com", "HR");

obj.printEmployee();
