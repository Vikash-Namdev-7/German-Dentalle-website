import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="" id="navbarTogglerDemo01">
      <div className="navAndHamberger">
        <div>
          <a href="/">
            <img src="/Image.jpg" alt="Logo" className="logo" />
          </a>
        </div>

        {/* Hamburger Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <div>
        <ul className={`navbar-nav ${menuOpen ? "show" : ""}`} id="nav-links">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#about">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#expert">
              Meet over Expert
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#specialties">
              Specialties
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#testimonials">
              Testimonials
            </a>
          </li>

        </ul>
        
      </div>
      <a
            className="contact nav-link"
            aria-current="page"
            id="link"
            href="#contact"
          >
            <i className="fa-solid fa-phone"></i> Contact
          </a>
    </div>
  );
}

export default Navbar;
