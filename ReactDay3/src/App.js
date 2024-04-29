import logo from "./logo.svg";
import "./App.css";
import { Greetings } from "./Greetings";
import ListDemo from "./ListDemo";
import Welcome from "./Welcome";
import InlineStyle from "./InlineStyle";
import CounterExample from "./UseEffect";
import { LifeCycleTest } from "./LifeCycleTest";
import { ClassCounter } from "./UpdateLifecycle";
import { Form } from "./form";
function App() {
  return (
    <div className="App, container">
      {/* <Greetings /> */}
      {/* <ListDemo /> */}
      {/* <Welcome isPrimaryColor={true} />
      <ListDemo /> */}
      {/* <CounterExample /> */}
      {/* <InlineStyle /> */}
      {/* <LifeCycleTest /> */}
      {/* <ClassCounter /> */}
      <Form />
    </div>
  );
}

export default App;
