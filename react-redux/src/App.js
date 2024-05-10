import logo from "./logo.svg";
import "./App.css";
import BookComponent from "./components/BookComponent";
import { Provider } from "react-redux";
import { store } from "./reduxContainer/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Demo</h1>
        <BookComponent />
      </div>
    </Provider>
  );
}

export default App;
