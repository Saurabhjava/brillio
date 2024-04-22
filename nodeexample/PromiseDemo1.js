const arr = [5, 3, -10, 6, -5, 12, -9];

const posNumber = removeNeg(arr, (x) => x % 2 == 0);
console.log(posNumber);

function removeNeg(numbers, callback) {
  const myArr = [];
  for (a of arr) {
    if (callback(a)) {
      myArr.push(a);
    }
  }
  return myArr;
}
