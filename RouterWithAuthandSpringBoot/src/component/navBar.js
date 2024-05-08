import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

function NavBar() {
  const auth = useAuth();
  return (
    <nav className="navbar navbar-expand-sm bg-dark">
      <div className="container-fluid">
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
          <li className="nav-item">
            {!auth.userId && <NavLink to={"/login"}>Login</NavLink>}
          </li>
          <li className="nav-item">
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/logout"}>Logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
