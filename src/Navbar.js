import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">MyWebsite</Link>

      
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

       
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
