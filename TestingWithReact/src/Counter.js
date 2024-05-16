import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <h1 data-testid="counterDisplay">{count}</h1>
      <button data-testid="b1" onClick={increment}>
        +
      </button>
      <button data-testid="b2" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default Counter;
