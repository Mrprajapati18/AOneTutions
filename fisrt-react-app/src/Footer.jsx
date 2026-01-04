// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   const socialMedia = [
//     { name: 'Facebook', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' },
//     { name: 'WhatsApp', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png' },
//     { name: 'Twitter', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png' },
//     { name: 'LinkedIn', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
//     { name: 'YouTube', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png' },
//     { name: 'Instagram', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png' }
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
//               <a href={social.url} key={index} aria-label={social.name}>
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
//             +91-xxxxxxxxxx
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



import React from 'react';
import './Footer.css';

const Footer = () => {
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

  const handleSocialClick = (url,) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
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
                href={social.url} 
                key={index} 
                aria-label={social.name}
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick(social.url, social.name);
                }}
                style={{ cursor: 'pointer' }}
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
            +91-87388 XXXXX
          </p>

          <br />
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
        © 2025 A One Tution. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;