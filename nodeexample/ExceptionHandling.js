var emp = {
  empid: 1001,
  name: "Saurabh",
  email: "sa@gmail.com",
};

try {
  if (emp.email === undefined) throw new SyntaxError("Email is required");
  console.log(emp.email);
} catch (err) {
  console.log(err.message);
}
