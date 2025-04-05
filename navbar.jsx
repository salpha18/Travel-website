import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SiReact } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  return (
    <div className="navbara">
      <nav>
        
        <div className="logo">
          <SiReact className="logo-icon" />
          <span>Travel</span>
        </div>

        
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            <li>Home</li>
          </Link>

          <Link to="/places" className={location.pathname === "/places" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            <li>Places</li>
          </Link>

          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            <li>About</li>
          </Link>

          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
