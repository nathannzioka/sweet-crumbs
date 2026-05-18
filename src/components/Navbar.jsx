import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Home
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Shop
      </NavLink>

      <NavLink
        to="/admin"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Admin Portal
      </NavLink>
    </nav>
  );
}

export default Navbar;