const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved");
});

// function getData() {
//   p.then((res) => console.log(res));
// }

// getData();

async function handleData() {
  const val = await fetch("https://api.restful-api.dev/objects");
  console.log(val.json());
  /*const data = await val.json();
  console.log(data);
  for (let d of data) {
    document.getElementById("tb").innerHTML +=
      "<tr><td>" + d.id + "</td><td>" + d.name + "</td></tr>";
  }*/
}

handleData();
