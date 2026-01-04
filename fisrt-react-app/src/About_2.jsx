import React from 'react';

function About() {
  return (
    <div className="about-page">
      <nav>
        <div className="logo">
          <div className="logo-icon">A</div>
          <div className="logo-text">
            <h1>A One Tuitions</h1>
            <p>Study with best tutors India</p>
          </div>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="About">About</a></li>
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

        <div className="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Students Learning"
              />
            </div>
            <div className="hero-text">
              <h1 className="main-heading">Begin Your Learning With Excellent Tutions</h1>
              <p className="hero-description">
                In the digital era, online learning has become the new norm. With the click of a button, we can now access a
                wealth of knowledge that was once only available in libraries or at the feet of masters.
              </p>
              <p className="hero-description">
                Excellent Tutions is the perfect platform for both students and tutors. As a tutor, you can set your own
                rates and schedule, and take on as many or as few students as you want. The process is simple and
                convenient, and you can get started today. As a student, you can search for tutors who are experts in the
                subjects you need help with.
              </p>
              <p className="hero-description">
                Excellent Tutions is the ultimate online learning and teaching platform. It connects tutors and learners
                from all over India in a safe and secure environment. With Excellent Tutions, you can be sure that you are
                getting the best possible education and training.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="courses-section">
          <h2 className="section-title">Courses Categories</h2>
          <div className="courses-grid">
            {/* Maths Tuition */}
            <div className="course-card">
              <div className="course-image">
                <img 
                  src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop"
                  alt="Maths Tuition"
                />
              </div>
              <h3 className="course-title">Maths Tuition</h3>
              <p className="course-description">6th to 12th, IITJEE (main/advance), B.Com, B.Tech, BBA, MBA, CAT, SAT</p>
            </div>

            {/* Physics Tuition */}
            <div className="course-card">
              <div className="course-image">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop"
                  alt="Physics Tuition"
                />
              </div>
              <h3 className="course-title">Physics Tuition</h3>
              <p className="course-description">8th, 9th, 10th, 11th, 12th, IITJEE (main/advance), NEET, B.Tech</p>
            </div>

            {/* Chemistry Tuition */}
            <div className="course-card">
              <div className="course-image">
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop"
                  alt="Chemistry Tuition"
                />
              </div>
              <h3 className="course-title">Chemistry Tuition</h3>
              <p className="course-description">8th, 9th, 10th, 11th, 12th, IITJEE (main/advance), NEET, B.Tech</p>
            </div>

            {/* B.Tech Tuition */}
            <div className="course-card">
              <div className="course-image">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                  alt="B.Tech Tuition"
                />
              </div>
              <h3 className="course-title">B.Tech Tuition</h3>
              <p className="course-description">All Engineering Subjects</p>
            </div>

            {/* Humanities Tuition */}
            <div className="course-card">
              <div className="course-image">
                <img 
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop"
                  alt="Humanities Tuition"
                />
              </div>
              <h3 className="course-title">Humanities Tuition</h3>
              <p className="course-description">All Humanities Subjects</p>
            </div>

            {/* BBA/MBA Tuition */}
            <div className="course-card">
              <div className="course-image">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
                  alt="BBA/MBA Tuition"
                />
              </div>
              <h3 className="course-title">BBA/MBA Tuition</h3>
              <p className="course-description">All Business Administration Subjects</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="features-grid">
            {/* Experience */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#4A90E2" />
                  <path d="M30 40 L50 30 L70 40 L70 60 L50 70 L30 60 Z" fill="#FFD700" />
                  <circle cx="35" cy="45" r="5" fill="#FF6B6B" />
                  <circle cx="50" cy="40" r="5" fill="#FF6B6B" />
                  <circle cx="65" cy="45" r="5" fill="#FF6B6B" />
                </svg>
              </div>
              <h3 className="feature-title">Experience</h3>
              <p className="feature-description">
                While book notes and friends can be helpful, not all of them are as effective as excellent tutors. When you
                learn with experienced tutors at Excellent Tutions, you gain deep knowledge and a clear understanding. Our
                excellent teachers provide a greater benefit to students.
              </p>
            </div>

            {/* Education */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="55" width="40" height="5" fill="#2C3E50" />
                  <path d="M50 30 L70 40 L70 55 L50 65 L30 55 L30 40 Z" fill="#2C3E50" />
                  <circle cx="50" cy="25" r="8" fill="#FFD700" />
                </svg>
              </div>
              <h3 className="feature-title">Education</h3>
              <p className="feature-description">
                Many students encounter difficulty when studying. Our tutors have better teaching styles, more knowledge, a
                more engaging style and more patience with their students. In addition, excellent tutors are generally
                better teachers and have a better rapport with their students.
              </p>
            </div>

            {/* Certificate */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="25" y="30" width="50" height="35" rx="3" fill="#E8E8E8" stroke="#2C3E50" strokeWidth="2" />
                  <circle cx="50" cy="47" r="8" fill="#FFD700" />
                  <path d="M45 75 L50 85 L55 75" fill="#E74C3C" />
                  <rect x="30" y="40" width="40" height="2" fill="#2C3E50" />
                  <rect x="35" y="55" width="30" height="2" fill="#2C3E50" />
                </svg>
              </div>
              <h3 className="feature-title">Certificate</h3>
              <p className="feature-description">
                We have made a more thorough learning experience for both students and tutors. Along with learning, you also
                get certificates for your completed courses or teaching experiences with us. This can add to your growth and
                career.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>About Us</h3>
            <span className="line"></span>
            <p>
              A One Tuitions is an online education portal that helps in
              connecting a student seeking home tutor and the teacher searching
              for a home tuition job. We are a growing family of almost
              10000+ tutors and students who are happily enjoying the art of
              learning from a personalized tutor.
            </p>
            <br />
            <h3>Follow Us</h3>
            <span className="line"></span>
            <div className="social-icons">
              <a href="#"><span>📘</span></a>
              <a href="#"><span>💬</span></a>
              <a href="#"><span>🐦</span></a>
              <a href="#"><span>💼</span></a>
              <a href="#"><span>▶️</span></a>
              <a href="#"><span>📷</span></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Popular Languages</h3>
            <span className="line"></span>
            <ul>
              <li>Hindi</li>
              <li>English</li>
              <li>Punjabi</li>
              <li>Gujarati</li>
              <li>Marathi</li>
              <li>Bangla</li>
              <li>Malayalam</li>
              <li>Spanish</li>
              <li>French</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <span className="line"></span>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Packages</li>
              <li>Contact Us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Popular Subjects</h3>
            <span className="line"></span>
            <ul>
              <li>English</li>
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Psychology</li>
              <li>Philosophy</li>
              <li>Computer</li>
              <li>Social Science</li>
              <li>French</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <span className="line"></span>
            <p>
              <span className="info-icon">✉️</span>
              info@aonetutions.com
            </p>
            <p>
              <span className="info-icon">📍</span>
              Friends Enclave Rajendra Park Extension Nangloi, Delhi 110041
            </p>
            <p>
              <span className="info-icon">📞</span>
              +91-xxxxxxxxxx
            </p>
            <br />
            <div className="location-box">
              <div className="map-live">
                <iframe
                  src="https://www.google.com/maps?q=Friends%20Enclave%20Rajendra%20Park%20Extension%20Nangloi%20Delhi%20110041&output=embed"
                  loading="lazy"
                  title="Location Map"
                  style={{ width: '100%', height: '200px', border: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 A One Tuition. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default About;