function validatePhone(names) {
  //var phoneno = /^\d{10}$/;
  //   if (phone.match(/^\d{10}$/)) console.log(phone);
  //   else console.log("Invalid Phone");

  let arr = names.split(/\W+/);
  for (let n of arr) console.log(n);
}

validatePhone("saurabh@#delhi$%;amit!@noida*&^raj");
