import logo from "./logo.svg";
import "./App.css";
import Home from "./component/home";
import { Route, Routes } from "react-router-dom";
import About from "./component/about";
import NavBar from "./component/navBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
