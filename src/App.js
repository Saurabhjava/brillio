import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";
import { ProductClass } from "./ProductClass";
import { ClickEvent } from "./ClickEvent";
import { Counter } from "./Counter";
import FunctionalState from "./FunctionalState";
import { ParentComponent } from "./ParentComponent";

function App() {
  return (
    <div className="App, container">
      <ParentComponent />
      {/* <FunctionalState /> */}
      {/* <Counter /> */}
      {/* <ClickEvent /> */}
      {/* <Product name="Ract Book" price="550" quantity="5">
        This book is good for novice.
      </Product>
      <Product name="Mobile" price="55000" quantity="10" />
      <Product name="Kurta" price="5500" quantity="13" />
      <Product name="Face Wash" price="250" quantity="15" />
      <Product name="Smart Watch" price="10500" quantity="18" />
      <ProductClass name="Shoes" price="4500" quantity="20">
        This is running shoes
      </ProductClass> */}
      {/* <div>
        <button className="btn btn-primary">PrimaryButton</button>
      </div> */}
    </div>
  );
}

export default App;
