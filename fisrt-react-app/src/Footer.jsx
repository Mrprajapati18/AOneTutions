// // import React from 'react';
// // import './Footer.css';

// // const Footer = () => {
// //   const socialMedia = [
// //     { name: 'Facebook', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' },
// //     { name: 'WhatsApp', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png' },
// //     { name: 'Twitter', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png' },
// //     { name: 'LinkedIn', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
// //     { name: 'YouTube', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png' },
// //     { name: 'Instagram', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png' }
// //   ];

// //   const popularLanguages = [
// //     'Hindi', 'English', 'Punjabi', 'Gujarati', 'Marathi', 
// //     'Bangla', 'Malayalam', 'Spanish', 'French'
// //   ];

// //   const quickLinks = [
// //     'Home', 'About Us', 'Services', 'Packages', 'Contact Us',
// //     'Terms and Conditions', 'Privacy Policy', 'Refund Policy'
// //   ];

// //   const popularSubjects = [
// //     'English', 'Mathematics', 'Physics', 'Chemistry', 'Biology',
// //     'Psychology', 'Philosophy', 'Computer', 'Social Science', 'French'
// //   ];

// //   return (
// //     <footer className="footer">
// //       <div className="footer-container">
        
// //         {/* About Us Column */}
// //         <div className="footer-col">
// //           <h3>About Us</h3>
// //           <span className="line"></span>
// //           <p>
// //             A One Tuition is an online education portal that helps in
// //             connecting a student seeking home tutor and the teacher searching
// //             for a home tuition job. We are a growing family of almost
// //             10000+ tutors and students who are happily enjoying the art of
// //             learning from a personalized tutor.
// //           </p>
// //           <br />
// //           <h3>Follow Us</h3>
// //           <span className="line"></span>
// //           <div className="social-icons">
// //             {socialMedia.map((social, index) => (
// //               <a href={social.url} key={index} aria-label={social.name}>
// //                 <img src={social.icon} alt={social.name} />
// //               </a>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Popular Languages Column */}
// //         <div className="footer-col">
// //           <h3>Popular Languages</h3>
// //           <span className="line"></span>
// //           <ul>
// //             {popularLanguages.map((language, index) => (
// //               <li key={index}>{language}</li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Quick Links Column */}
// //         <div className="footer-col">
// //           <h3>Quick Links</h3>
// //           <span className="line"></span>
// //           <ul>
// //             {quickLinks.map((link, index) => (
// //               <li key={index}>{link}</li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Popular Subjects Column */}
// //         <div className="footer-col">
// //           <h3>Popular Subjects</h3>
// //           <span className="line"></span>
// //           <ul>
// //             {popularSubjects.map((subject, index) => (
// //               <li key={index}>{subject}</li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Contact Us Column */}
// //         <div className="footer-col">
// //           <h3>Contact Us</h3>
// //           <span className="line"></span>
          
// //           <p>
// //             <span className="info-icon">✉️</span>
// //             info@aonetutions.com
// //           </p>
// //           <p>
// //             <span className="info-icon">📍</span>
// //             Friends Enclave Rajendra Park Extension Nangloi, Delhi 110041
// //           </p>
// //           <p>
// //             <span className="info-icon">📞</span>
// //             +91-xxxxxxxxxx
// //           </p>

// //           <br />
// //           <div className="location-box">
// //             <div className="map-live">
// //               <iframe
// //                 src="https://www.google.com/maps?q=Friends%20Enclave%20Rajendra%20Park%20Extension%20Nangloi%20Delhi%20110041&output=embed"
// //                 loading="lazy"
// //                 title="Location Map"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //       </div>
      
// //       <div className="footer-bottom">
// //         © 2025 A One Tution. All Rights Reserved.
// //       </div>
// //     </footer>
// //   );
// // };



// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   const whatsappMessage = `Hello A One Tuitions! 👋

// I am interested in learning more about your services. Please provide information about:

// 📚 *Course Enquiry:*
// - Available courses and subjects
// - Course duration and schedule
// - Teaching methodology

// 💰 *Pricing Details:*
// - Course fees structure
// - Any ongoing discounts or offers
// - Payment plans available

// 👨‍🏫 *Tutor Information:*
// - Tutor qualifications
// - Experience and expertise
// - Demo class availability

// 📍 *Other Details:*
// - Class timings (online/offline)
// - Study material provided
// - Batch size

// Looking forward to your response!`;

//   const whatsappUrl = `https://api.whatsapp.com/send?phone=918738879939&text=${encodeURIComponent(whatsappMessage)}`;

//   const socialMedia = [
//     { name: 'Facebook', url: 'https://facebook.com', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' },
//     { name: 'WhatsApp', url: whatsappUrl, icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png' },
//     { name: 'Twitter', url: 'https://twitter.com', icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png' },
//     { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
//     { name: 'YouTube', url: 'https://youtube.com', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png' },
//     { name: 'Instagram', url: 'https://instagram.com', icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png' }
//   ];

//   const popularLanguages = [
//     'Hindi', 'English', 'Punjabi', 'Gujarati', 'Marathi', 
//     'Bangla', 'Malayalam', 'Spanish', 'French'
//   ];

//   const quickLinks = [
//     'Home', 'About Us', 'Services', 'Packages', 'Contact Us',
//     'Terms and Conditions', 'Privacy Policy', 'Refund Policy'
//   ];

//   const popularSubjects = [
//     'English', 'Mathematics', 'Physics', 'Chemistry', 'Biology',
//     'Psychology', 'Philosophy', 'Computer', 'Social Science', 'French'
//   ];

//   const handleSocialClick = (url,) => {
//     window.open(url, '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-container">
        
//         {/* About Us Column */}
//         <div className="footer-col">
//           <h3>About Us</h3>
//           <span className="line"></span>
//           <p>
//             A One Tuition is an online education portal that helps in
//             connecting a student seeking home tutor and the teacher searching
//             for a home tuition job. We are a growing family of almost
//             10000+ tutors and students who are happily enjoying the art of
//             learning from a personalized tutor.
//           </p>
//           <br />
//           <h3>Follow Us</h3>
//           <span className="line"></span>
//           <div className="social-icons">
//             {socialMedia.map((social, index) => (
//               <a 
//                 href={social.url} 
//                 key={index} 
//                 aria-label={social.name}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleSocialClick(social.url, social.name);
//                 }}
//                 style={{ cursor: 'pointer' }}
//               >
//                 <img src={social.icon} alt={social.name} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Popular Languages Column */}
//         <div className="footer-col">
//           <h3>Popular Languages</h3>
//           <span className="line"></span>
//           <ul>
//             {popularLanguages.map((language, index) => (
//               <li key={index}>{language}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Quick Links Column */}
//         <div className="footer-col">
//           <h3>Quick Links</h3>
//           <span className="line"></span>
//           <ul>
//             {quickLinks.map((link, index) => (
//               <li key={index}>{link}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Popular Subjects Column */}
//         <div className="footer-col">
//           <h3>Popular Subjects</h3>
//           <span className="line"></span>
//           <ul>
//             {popularSubjects.map((subject, index) => (
//               <li key={index}>{subject}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Us Column */}
//         <div className="footer-col">
//           <h3>Contact Us</h3>
//           <span className="line"></span>
          
//           <p>
//             <span className="info-icon">✉️</span>
//             info@aonetutions.com
//           </p>
//           <p>
//             <span className="info-icon">📍</span>
//             Friends Enclave Rajendra Park Extension Nangloi, Delhi 110041
//           </p>
//           <p>
//             <span className="info-icon">📞</span>
//             +91-87388 XXXXX
//           </p>

//           <br />
//           <div className="location-box">
//             <div className="map-live">
//               <iframe
//                 src="https://www.google.com/maps?q=Friends%20Enclave%20Rajendra%20Park%20Extension%20Nangloi%20Delhi%20110041&output=embed"
//                 loading="lazy"
//                 title="Location Map"
//               />
//             </div>
//           </div>
//         </div>

//       </div>
      
//       <div className="footer-bottom">
//         © 2025 A One Tution. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTopVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = `Hello A One Tuitions! 👋

I am interested in learning more about your services. Please provide information about:

📚 *Course Enquiry:*
- Available courses and subjects
- Course duration and schedule
- Teaching methodology

💰 *Pricing Details:*
- Course fees structure
- Any ongoing discounts or offers
- Payment plans available

👨‍🏫 *Tutor Information:*
- Tutor qualifications
- Experience and expertise
- Demo class availability

📍 *Other Details:*
- Class timings (online/offline)
- Study material provided
- Batch size

Looking forward to your response!`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=918738879939&text=${encodeURIComponent(whatsappMessage)}`;

  const socialMedia = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' },
    { name: 'WhatsApp', url: whatsappUrl, icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
    { name: 'YouTube', url: 'https://youtube.com', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png' }
  ];

  const popularLanguages = [
    'Hindi', 'English', 'Punjabi', 'Gujarati', 'Marathi', 
    'Bangla', 'Malayalam', 'Spanish', 'French'
  ];

  const quickLinks = [
    'Home', 'About Us', 'Services', 'Packages', 'Contact Us',
    'Terms and Conditions', 'Privacy Policy', 'Refund Policy'
  ];

  const popularSubjects = [
    'English', 'Mathematics', 'Physics', 'Chemistry', 'Biology',
    'Psychology', 'Philosophy', 'Computer', 'Social Science', 'French'
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          
          {/* About Us Column */}
          <div className="footer-col">
            <h3>About Us</h3>
            <span className="line"></span>
            <p>
              A One Tuition is an online education portal that helps in
              connecting a student seeking home tutor and the teacher searching
              for a home tuition job. We are a growing family of almost
              10000+ tutors and students who are happily enjoying the art of
              learning from a personalized tutor.
            </p>
            <br />
            <h3>Follow Us</h3>
            <span className="line"></span>
            <div className="social-icons">
              {socialMedia.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Popular Languages Column */}
          <div className="footer-col">
            <h3>Popular Languages</h3>
            <span className="line"></span>
            <ul>
              {popularLanguages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <span className="line"></span>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          {/* Popular Subjects Column */}
          <div className="footer-col">
            <h3>Popular Subjects</h3>
            <span className="line"></span>
            <ul>
              {popularSubjects.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <span className="line"></span>
            
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <a href="mailto:info@aonetutions.com" className="contact-link">
                  info@aonetutions.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <span className="contact-label">Address</span>
                <p className="contact-text">
                  Friends Enclave Rajendra Park Extension Nangloi, Delhi 110041
                </p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-details">
                <span className="contact-label">Phone</span>
                <a href="tel:+918738879939" className="contact-link">
                  +91-87388 79939
                </a>
              </div>
            </div>

            <div className="location-box">
              <div className="map-live">
                <iframe
                  src="https://www.google.com/maps?q=Friends%20Enclave%20Rajendra%20Park%20Extension%20Nangloi%20Delhi%20110041&output=embed"
                  loading="lazy"
                  title="Location Map"
                />
              </div>
            </div>
          </div>

        </div>
        
        <div className="footer-bottom">
          © 2025 A One Tuition. All Rights Reserved.
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href={whatsappUrl}
        className="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" width="28" height="28">
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.826.739 5.481 2.031 7.782L.051 31.95l8.322-2.03C10.615 31.24 13.26 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.455c-2.516 0-4.897-.686-6.937-1.881l-.496-.294-5.16 1.26 1.302-5.041-.323-.517A13.381 13.381 0 012.545 16c0-7.43 6.025-13.455 13.455-13.455S29.455 8.57 29.455 16 23.43 29.455 16 29.455zm7.378-9.825c-.404-.202-2.388-1.178-2.758-1.312-.369-.134-.638-.202-.908.202-.269.404-1.044 1.312-1.279 1.581-.235.269-.471.303-.875.101-.404-.202-1.707-.629-3.251-2.005-1.202-1.071-2.013-2.394-2.248-2.798-.235-.404-.025-.622.177-.823.182-.181.404-.471.606-.707.202-.235.269-.404.404-.673.134-.269.067-.504-.034-.707-.101-.202-.908-2.186-1.245-2.994-.328-.788-.661-.681-.908-.694-.235-.012-.504-.015-.773-.015s-.707.101-1.077.504c-.369.404-1.413 1.38-1.413 3.365s1.447 3.902 1.649 4.171c.202.269 2.847 4.347 6.898 6.095.963.416 1.715.664 2.301.85.967.307 1.847.264 2.543.16.776-.116 2.388-.976 2.723-1.918.336-.942.336-1.75.235-1.918-.101-.168-.37-.269-.774-.471z"/>
        </svg>
      </a>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-top ${scrollTopVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
};

export default Footer;