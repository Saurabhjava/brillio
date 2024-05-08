import "./App.css";
import Home from "./component/home";
import { Route, Routes } from "react-router-dom";
//import About from "./component/about";
import NavBar from "./component/navBar";
import OrderSummary from "./component/OrderSummary";
import React from "react";
import Product from "./component/Product";
import NewProduct from "./component/NewProduct";
import FeaturedProduct from "./component/FeaturedProduct";
const LazyAbout = React.lazy(() => import("./component/about"));
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />}>
          <Route path="new" element={<NewProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
        </Route>
        {/* <Route path="about" element={<About />} /> */}
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading.......">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary/:order" element={<OrderSummary />} />
      </Routes>
    </>
  );
}

export default App;
