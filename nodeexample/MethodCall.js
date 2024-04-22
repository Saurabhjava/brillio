//var arr = ["Delhi", "Noida", "Gorgaon", "Bangalore"];
//console.log(typeof arr);
var x = new Number(10);
//var x = 10;
console.log(typeof x);
var emp = {
  empid: 1001,
  name: "Saurabh",
  email: "saurabh@gmail.com",
};
console.log(typeof emp);
function callMe(data) {
  console.log("Inside Method ");
  //data.push("Hydrabad");
  //data.email = "sa@gmail.com";
  data += 5;
  console.log(data);
}

callMe(x);
console.log("outSide method ");
console.log(x);

console.log(10 / 0);
