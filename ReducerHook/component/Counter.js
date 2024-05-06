import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const myReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function Counter() {
  const [count, dispatch] = useReducer(myReducer, initialState);
  return (
    <div>
      <div>
        <h3>Count= {count.firstCounter}</h3>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "increment", value: 5 })}
        >
          Increment
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "decrement", value: 5 })}
        >
          Decrement
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "reset", value: 0 })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
