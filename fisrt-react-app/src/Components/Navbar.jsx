import { useState } from "react";
import { Link } from "react-router-dom";
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        
        {/* Services Dropdown */}
        <li className="dropdown-wrapper">
          <a href="#services" className="dropdown-trigger">
            Services
            <span className="dropdown-arrow">▼</span>
          </a>
          
          <div className="dropdown-menu">
            <a href="#mobile-app" className="dropdown-item">
             1st To 12th Standard Courses
              <span className="arrow-right">›</span>
            </a>
            <a href="#website" className="dropdown-item">
              Entrance & Competitive Exams
              <span className="arrow-right">›</span>
            </a>
            <a href="#erp" className="dropdown-item">
              Language Classes
            </a>
            <a href="#ai" className="dropdown-item">
              Study Material
            </a>
            <a href="#iot" className="dropdown-item">
             Soft Skills
            </a>
            <a href="#chatbot" className="dropdown-item">
              Communication Skills
            </a>
            <a href="#cms" className="dropdown-item">
              Spocken English
              <span className="arrow-right">›</span>
            </a>
            <a href="#trending" className="dropdown-item">
              Trending Technology
              <span className="arrow-right">›</span>
            </a>
            <a href="#outsourcing" className="dropdown-item">
              All Outsourcing Services
            </a>
          </div>
        </li>

        {/* Packages Dropdown */}
        <li className="dropdown-wrapper">
          <a href="#packages" className="dropdown-trigger">
            Packages
            <span className="dropdown-arrow">▼</span>
          </a>
          
          <div className="dropdown-menu">
            <a href="#basic-package" className="dropdown-item">
              Basic Package
            </a>
            <a href="#standard-package" className="dropdown-item">
              Standard Package
            </a>
            <a href="#premium-package" className="dropdown-item">
              Premium Package
            </a>
            <a href="#enterprise-package" className="dropdown-item">
              Enterprise Package
            </a>
            <a href="#custom-package" className="dropdown-item">
              Custom Package
            </a>
          </div>
        </li>

        {/* Register Dropdown */}
        <li className="dropdown-wrapper">
          <a href="#register" className="dropdown-trigger">
            Register
            <span className="dropdown-arrow">▼</span>
          </a>
          
          <div className="dropdown-menu">
            <a href="#student-registration" className="dropdown-item">
              Student Registration
            </a>
            <a href="#tutor-registration" className="dropdown-item">
              Tutor Registration
            </a>
            <a href="#institution-registration" className="dropdown-item">
              Institution Registration
            </a>
          </div>
        </li>

        <li>
          <div className="reviews-badge">
            <span className="stars">★★★★★</span>
            <span className="rating">4.3/5</span>
          </div>
        </li>
      
        <li><a href="#demo">Book Demo</a></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <div className="right-section">
        <div className="client-support">
          <span className="support-icon">📞</span>
          <div className="support-text">
            <span className="support-label">For Client Support:</span>
            <span className="support-number">806940XXXX</span>
          </div>
        </div>
        <button className="pay-now-btn">Pay Now</button>
      </div>

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