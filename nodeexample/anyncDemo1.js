console.log("Start of Page");
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 5000);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved1");
  }, 8000);
});
async function handleData() {
  console.log("Hello World!!");
  const val = await p;
  console.log(val);
  console.log("Hello JavaScript1");

  const val1 = await p1;
  console.log(val1);
  console.log("Hello JavaScript2");
}
handleData();
