const initialCounter = {
  counter: 0,
};

const CounterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case "+":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "-":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default CounterReducer;
