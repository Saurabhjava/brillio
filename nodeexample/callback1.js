function sum(x, y, callback) {
  let result = x + y;
  callback(result);
}
function displayConsole(r) {
  //let result = sum(a, b);
  console.log(r);
}
function displayOnDiv(r) {
  //let result = sum(a, b);
  document.getElementById("d1").innerHTML = r;
}

//displayConsole(5, 6);
//displayOnDiv(5, 6);

sum(4, 8, displayOnDiv);
