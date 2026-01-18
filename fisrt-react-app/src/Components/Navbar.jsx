import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">A</div>
        <div className="logo-text">
          <h1>A One Tuitions</h1>
          <p>Study with best tutors India</p>
        </div>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#packages">Packages</a></li>
        <li><a href="#register">Register</a></li>
        <li><a href="#pay">Pay Online</a></li>

        <li>
          <div className="reviews-badge">
            <span className="stars">★★★★★</span>
            <span className="rating">4.3/5</span>
          </div>
        </li>

        <li><a href="#demo">Book Demo</a></li>
      </ul>

      <button className="contact-btn">Contact Us</button>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
