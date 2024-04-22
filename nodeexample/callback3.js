var arr = ["Amit", "Chirah", "Mounika", "Raj"];

/*arr.forEach(function (ele) {
  console.log(ele);
});*/

/*function myfunc(item, index) {
  console.log("Index " + index + " Item " + item);
}*/

/*for (let i = 0; i < arr.length; i++) {
  myfunc(arr[i]);
}*/
let i = 0;
function m1(callback) {
  if (i < arr.length) {
    i++;
  }
  m1(myfunc(arr[i]));
}
function myfunc(x) {
  console.log(x);
}
m1(myfunc(i));
