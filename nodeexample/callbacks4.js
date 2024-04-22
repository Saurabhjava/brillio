/*function expResult(action, a, b) {
  if (action === "add") return a + b;
  else if (action === "sub") return a - b;
}*/

function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function product(x, y) {
  return x * y;
}
function expResult(callback, a, b) {
  return callback(a, b);
}

console.log(expResult(product, 8, 2));
