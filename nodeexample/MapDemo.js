const data = new Map();
data.set("Saurabh", 9999596047);
data.set("Amit", 9999596048);
data.set("Raj", 9999596007);
//console.log(m.get("C"));

/*for (let [k, v] of data) {
  //console.log(v);
  document.getElementById("d1").innerHTML += `${k} : ${v}<br>`;
}*/

function addData(username, phone) {
  data.set(username, phone);
  console.log(data);
  document.getElementById("d1").innerHTML = "";
  for (let [k, v] of data) {
    //console.log(v);
    document.getElementById("d1").innerHTML += `${k} : ${v}<br>`;
  }
}
