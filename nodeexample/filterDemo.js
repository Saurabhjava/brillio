const arr = [1, 5, 3, 7, 5, 1, 7];
console.log(arr);
//arr.sort();

//console.log(arr.filter((e) => e > 50));
const total = arr.reduce((t, e) => t + e);
console.log(total);
