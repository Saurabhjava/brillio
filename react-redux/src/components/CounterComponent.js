import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../reduxContainer/CounterAction";
import { buy_book } from "../reduxContainer/BookAction";

function CounterComponent() {
  const countValue = useSelector((state) => state.Count.counter);
  const noOfBooks = useSelector((state) => state.BookReducer.noOfBooks);
  const dis = useDispatch();
  return (
    <>
      <div>Available Books{noOfBooks}</div>
      <div>Count {countValue}</div>
      <button onClick={() => dis(increment())}>Increment</button>
      <button onClick={() => dis(decrement())}>Decrement</button>
      <button onClick={() => dis(buy_book())}>Buy Book</button>
    </>
  );
}

export default CounterComponent;
