import "./App.css";
import CreateEmployee from "./component/CreateEmployee";
import DataFatching from "./component/DataFatchingWithhooks";
import { MyComponent } from "./component/GetApiTest";
import FindEmployee from "./component/GetEmployeeById";
import { PostList } from "./component/GetRequestWithAxios";

function App() {
  return (
    <div className="App, container">
      {/* <MyComponent /> */}
      {/* <PostList /> */}
      {/* <DataFatching /> */}
      {/* <FindEmployee /> */}
      <CreateEmployee />
    </div>
  );
}

export default App;
