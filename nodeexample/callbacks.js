function hello(callback) {
  setTimeout(function () {
    console.log("Hello....");
    callback();
  }, 1000);
}

function goodBye() {
  console.log("Good Bye");
}
function hi() {
  console.log("Hi");
}

hello(hi);

/*function hello(cback) {
  console.log("Hello....");
  cback();
}
function goodbye() {
  console.log("GoodBye....");
}

hello(goodbye);*/
