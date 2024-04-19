import Employee from "./employee";

class Manager extends Employee {
  constructor(department) {
    this.department = department;
  }
}

var obj1 = new Manager("HR");
console.log(obj1);
