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
import PageNotFound from "./component/PageNotFound";
import Login from "./component/Login";
import Profile from "./component/Profile";
import { RequireAuth } from "./component/RequireAuth";
import { AuthProvider } from "./component/Auth";
import { Logout } from "./component/Logout";
const LazyAbout = React.lazy(() => import("./component/about"));
function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
