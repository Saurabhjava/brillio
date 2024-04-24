import { useState } from "react";

function FunctionalState() {
  const [count, setCount] = useState(0);
  //const [age, setAge] = useState(21);
  //   function incr() {
  //     setCount(count + 1);
  //     console.log(count);
  //   }
  return (
    <div>
      <p>You Have clicked {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default FunctionalState;
