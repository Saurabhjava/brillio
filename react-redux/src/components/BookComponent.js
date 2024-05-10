import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buy_book } from "../reduxContainer/BookAction";

function BookComponent() {
  const noOfBooks = useSelector((state) => state.noOfBooks);
  const dis = useDispatch();
  return (
    <>
      <div>BookComponent</div>
      <h4>No Of Books Available in Store {noOfBooks} </h4>
      <button
        onClick={() => {
          dis(buy_book());
        }}
      >
        Buy Book
      </button>
    </>
  );
}

export default BookComponent;
