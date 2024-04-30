const { useState, useEffect } = require("react");

function CounterExample() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You Clicked ${count} times`;
    document.getElementById("b1").innerHTML = `${count}`;
  });
  return (
    <div>
      <h1>You Clicked {count} times</h1>
      {/* {(document.title = `You Clicked ${count} times`)} */}
      <button id="b1" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}
export default CounterExample;
