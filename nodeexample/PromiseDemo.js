/*const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("We are learning JavaScript");
  }, 3000);
});

console.log(p);
p.then((value) => {
  console.log(value);
  console.log(p);
});*/

function checkAge(age) {
  let p = new Promise((res, rej) => {
    if (age > 18) {
      res("Valid Age");
    } else {
      rej("Invalid Age");
    }
  });
  return p;
}

let obj = checkAge(10);
obj
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
