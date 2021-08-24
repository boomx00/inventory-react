import "./Navbar.css";
import logo from "../../images/logo-sm.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navbar-main">
          <div className="navbar-logo-container">
            <img src={logo} className="navbar-logo-image"></img>
          </div>

          <div className="navbar-list">
            <NavLink to="/">Home</NavLink>
            <a href="#">Catalog</a>
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
