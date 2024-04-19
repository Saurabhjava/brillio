//
// var emp = new Object();
// emp.eid = 111;
// emp.ename = "Amit";
// console.log(emp);

function Employee(empid, ename, email, age) {
  this.empid = empid;
  this.ename = ename;
  this.email = email;
  this.age = age;
}

var emp = new Employee(1001, "Ram", "ram@gmail.com", 32);

console.log("Employee Id=" + emp.empid);
console.log("Employee Name=" + emp.ename);
console.log("Employee Age=" + emp.age);
