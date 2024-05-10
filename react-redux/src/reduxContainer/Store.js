import { combineReducers, createStore } from "redux";
import BookReducer from "./BookReducer";
import CounterReducer from "./CounterReducer";

export const store = createStore(
  combineReducers({ BookReducer: BookReducer, Count: CounterReducer })
);
