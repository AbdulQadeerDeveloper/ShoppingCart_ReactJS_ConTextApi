/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/">home</NavLink>
      <NavLink to="/google">Google Auth 2.0</NavLink>
      <NavLink to="/cart">cart</NavLink>
    </div>
  );
};

export default Navbar;
