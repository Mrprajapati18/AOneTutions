// import React, { useEffect, useRef, useState } from "react";
// import "./About.css";

// function About() {
//   const [isVisible, setIsVisible] = useState({
//     hero: false,
//     subjects: false,
//   });

//   const heroRef = useRef(null);
//   const subjectsRef = useRef(null);

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           if (entry.target === heroRef.current) {
//             setIsVisible((prev) => ({ ...prev, hero: true }));
//           } else if (entry.target === subjectsRef.current) {
//             setIsVisible((prev) => ({ ...prev, subjects: true }));
//           }
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);

//     if (heroRef.current) observer.observe(heroRef.current);
//     if (subjectsRef.current) observer.observe(subjectsRef.current);

//     return () => observer.disconnect();
//   }, []);

//   const subjects = [
//     "Accounts",
//     "Biology",
//     "Hindi",
//     "Chemistry",
//     "Geography",
//     "Mathematics",
//     "Commerce",
//     "Economics",
//     "English",
//     "History",
//     "Science",
//     "Sanskrit",
//     "Social Science",
//     "Biotechnology",
//     "Polity",
//     "Music",
//     "Others",
//   ];

//   const graduationOptions = ["BA", "B.SC", "Others"];
//   const competitionOptions = ["IIT", "NEET", "Banking", "Others"];

//   const handleSubjectClick = (subject) => {
//     console.log(`Selected subject: ${subject}`);
//   };

//   const handleGraduationClick = (option) => {
//     console.log(`Selected graduation: ${option}`);
//   };

//   const handleCompetitionClick = (option) => {
//     console.log(`Selected competition: ${option}`);
//   };

//   return (
//     <div className="about-page">
//       <div className="container">
       
//         <section
//           ref={heroRef}
//           className={`hero-section ${isVisible.hero ? "animate" : ""}`}
//         >
//           <div className="hero-content">
//             <div className="hero-image">
//               <img
//                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
//                 alt="Students Learning"
//                 loading="lazy"
//               />
//             </div>
//             <div className="hero-text">
//               <h1 className="main-heading">
//                 Begin Your Learning With A One Tutions
//               </h1>
//               <p className="hero-description">
//                 In the digital era, online learning has become the new norm.
//                 With the click of a button, we can now access a wealth of
//                 knowledge that was once only available in libraries or at the
//                 feet of masters.
//               </p>
//               <p className="hero-description">
//                 A One Tutions is the perfect platform for both students and
//                 tutors. As a tutor, you can set your own rates and schedule, and
//                 take on as many or as few students as you want. The process is
//                 simple and convenient, and you can get started today. As a
//                 student, you can search for tutors who are experts in the
//                 subjects you need help with.
//               </p>
//               <p className="hero-description">
//                 A One Tutions is the ultimate online learning and teaching
//                 platform. It connects tutors and learners from all over India in
//                 a safe and secure environment. With A One Tutions, you can be
//                 sure that you are getting the best possible education and
//                 training.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Subjects Section */}
//         <section
//           ref={subjectsRef}
//           className={`subjects-main-section ${
//             isVisible.subjects ? "animate" : ""
//           }`}
//         >
//           <h2 className="section-title">Subjects We Provide</h2>

//           <div className="subjects-section">
//             <div className="subjects-grid">
//               {subjects.map((subject, index) => (
//                 <button
//                   key={index}
//                   className="subject-btn"
//                   onClick={() => handleSubjectClick(subject)}
//                   style={{
//                     animationDelay: `${index * 0.05}s`,
//                   }}
//                 >
//                   {subject}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="section-divider"></div>

//           <div className="options-wrapper">
//             <div className="option-section">
//               <h3 className="option-title">Graduation</h3>
//               <div className="option-grid">
//                 {graduationOptions.map((option, index) => (
//                   <button
//                     key={index}
//                     className="option-btn"
//                     onClick={() => handleGraduationClick(option)}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="option-section">
//               <h3 className="option-title">Competition</h3>
//               <div className="option-grid">
//                 {competitionOptions.map((option, index) => (
//                   <button
//                     key={index}
//                     className="option-btn"
//                     onClick={() => handleCompetitionClick(option)}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default About;

import React, { useEffect, useRef, useState } from "react";
import "./About.css";

function About() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    courses: false,
    subjects: false,
  });

  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const subjectsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === heroRef.current) {
            setIsVisible((prev) => ({ ...prev, hero: true }));
          } else if (entry.target === coursesRef.current) {
            setIsVisible((prev) => ({ ...prev, courses: true }));
          } else if (entry.target === subjectsRef.current) {
            setIsVisible((prev) => ({ ...prev, subjects: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (coursesRef.current) observer.observe(coursesRef.current);
    if (subjectsRef.current) observer.observe(subjectsRef.current);

    return () => observer.disconnect();
  }, []);

  const coursesData = [
    {
      id: 1,
      title: "Maths Tuition",
      description:
        "6th to 12th, IITJEE (main/advance), B.Com, B.Tech, BBA, MBA, CAT, SAT",
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop",
      bgColor: "#f0f4ff",
    },
    {
      id: 2,
      title: "Physics Tuition",
      description: "8th, 9th, 10th, 11th, 12th, IITJEE (main/advance), NEET, B.Tech",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      bgColor: "#fff8f0",
    },
    {
      id: 3,
      title: "Chemistry Tuition",
      description: "8th, 9th, 10th, 11th, 12th, IITJEE (main/advance), NEET, B.Tech",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
      bgColor: "#fff0f0",
    },
    {
      id: 4,
      title: "B.Tech Tuition",
      description:
        "Maths, Physics, Chemistry, Elect. Engg., AI, Mech. Engg, C.S.Engg etc",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      bgColor: "#f0fff4",
    },
    {
      id: 5,
      title: "Humanities Tuition",
      description:
        "9th, 10th, 11th & 12th, Psychology, Sociology, History, Geography, Political Science.etc",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
      bgColor: "#fff0f8",
    },
    {
      id: 6,
      title: "BBA/MBA Tuition",
      description:
        "Business Maths, Business Economics, Financial Accounting, O.B, Marketing Mgt., Financial Mgt. etc",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      bgColor: "#f8f0ff",
    },
  ];

  const subjects = [
    "Accounts",
    "Biology",
    "Hindi",
    "Chemistry",
    "Geography",
    "Mathematics",
    "Commerce",
    "Economics",
    "English",
    "History",
    "Science",
    "Sanskrit",
    "Social Science",
    "Biotechnology",
    "Polity",
    "Music",
    "Others",
  ];

  const graduationOptions = ["BA", "B.SC", "Others"];
  const competitionOptions = ["IIT", "NEET", "Banking", "Others"];

  const handleSubjectClick = (subject) => {
    console.log(`Selected subject: ${subject}`);
  };

  const handleGraduationClick = (option) => {
    console.log(`Selected graduation: ${option}`);
  };

  const handleCompetitionClick = (option) => {
    console.log(`Selected competition: ${option}`);
  };

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className={`hero-section ${isVisible.hero ? "animate" : ""}`}
        >
          <div className="hero-content">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Students Learning"
                loading="lazy"
              />
            </div>
            <div className="hero-text">
              <h1 className="main-heading">
                Begin Your Learning With A One Tutions
              </h1>
              <p className="hero-description">
                In the digital era, online learning has become the new norm.
                With the click of a button, we can now access a wealth of
                knowledge that was once only available in libraries or at the
                feet of masters.
              </p>
              <p className="hero-description">
                A One Tutions is the perfect platform for both students and
                tutors. As a tutor, you can set your own rates and schedule, and
                take on as many or as few students as you want. The process is
                simple and convenient, and you can get started today. As a
                student, you can search for tutors who are experts in the
                subjects you need help with.
              </p>
              <p className="hero-description">
                A One Tutions is the ultimate online learning and teaching
                platform. It connects tutors and learners from all over India in
                a safe and secure environment. With A One Tutions, you can be
                sure that you are getting the best possible education and
                training.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Categories Section */}
        <section
          ref={coursesRef}
          className={`courses-categories-section ${
            isVisible.courses ? "animate" : ""
          }`}
        >
          <h2 className="courses-main-title">Courses Categories</h2>
          <div className="courses-categories-grid">
            {coursesData.map((course, index) => (
              <div
                key={course.id}
                className="category-card"
                style={{
                  backgroundColor: course.bgColor,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="category-image">
                  <img src={course.image} alt={course.title} loading="lazy" />
                </div>
                <div className="category-content">
                  <h3 className="category-title">{course.title}</h3>
                  <p className="category-description">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subjects Section */}
        <section
          ref={subjectsRef}
          className={`subjects-main-section ${
            isVisible.subjects ? "animate" : ""
          }`}
        >
          <h2 className="section-title">Subjects We Provide</h2>

          <div className="subjects-section">
            <div className="subjects-grid">
              {subjects.map((subject, index) => (
                <button
                  key={index}
                  className="subject-btn"
                  onClick={() => handleSubjectClick(subject)}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="options-wrapper">
            <div className="option-section">
              <h3 className="option-title">Graduation</h3>
              <div className="option-grid">
                {graduationOptions.map((option, index) => (
                  <button
                    key={index}
                    className="option-btn"
                    onClick={() => handleGraduationClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-section">
              <h3 className="option-title">Competition</h3>
              <div className="option-grid">
                {competitionOptions.map((option, index) => (
                  <button
                    key={index}
                    className="option-btn"
                    onClick={() => handleCompetitionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;