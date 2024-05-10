const initialState = {
  noOfBooks: 20,
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "buyBook":
      return {
        ...state,
        noOfBooks: state.noOfBooks - 1,
      };
    default:
      return state;
  }
};

export default BookReducer;
