import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark">
      <div class="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"about"}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/product"}>Product</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
