// import React, { useEffect, useRef, useState } from "react";
// import "./Stats.css";

// function Stats() {
//   const statsRef = useRef(null);
//   const [start, setStart] = useState(false);

//   const [counts, setCounts] = useState({
//     students: 0,
//     tutors: 0,
//     courses: 0,
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!statsRef.current || start) return;

//       const top = statsRef.current.getBoundingClientRect().top;
//       const screenHeight = window.innerHeight;

//       if (top < screenHeight) {
//         setStart(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [start]);

//   // 🔹 Counter logic
//   useEffect(() => {
//     if (!start) return;

//     const targets = {
//       students: 10000,
//       tutors: 500,
//       courses: 50,
//     };

//     const interval = setInterval(() => {
//       setCounts(prev => ({
//         students:
//           prev.students < targets.students
//             ? prev.students + 100
//             : targets.students,
//         tutors:
//           prev.tutors < targets.tutors
//             ? prev.tutors + 5
//             : targets.tutors,
//         courses:
//           prev.courses < targets.courses
//             ? prev.courses + 1
//             : targets.courses,
//       }));
//     }, 20);

//     return () => clearInterval(interval);
//   }, [start]);

//   return (
//     <>
//       <section ref={statsRef} style={{ margin: "80px 0" }}>
//         <div className="stats">
//           <div className="stat-item">
//             <span className="stat-number">{counts.students}+</span>
//             <span className="stat-label">Active Students</span>
//           </div>

//           <div className="stat-item">
//             <span className="stat-number">{counts.tutors}+</span>
//             <span className="stat-label">Expert Tutors</span>
//           </div>

//           <div className="stat-item">
//             <span className="stat-number">{counts.courses}+</span>
//             <span className="stat-label">Courses</span>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Stats;
import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";

function Stats() {
  const statsRef = useRef(null);
  const [start, setStart] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    tutors: 0,
    courses: 0,
  });

  // Scroll detection for animation trigger
  useEffect(() => {
    const handleScroll = () => {
      if (!statsRef.current || start) return;

      const top = statsRef.current.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (top < screenHeight * 0.8) {
        setStart(true);
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [start]);

  // Animated counter logic
  useEffect(() => {
    if (!start) return;

    const targets = {
      students: 10000,
      tutors: 500,
      courses: 50,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        students: Math.min(
          Math.floor(targets.students * progress),
          targets.students
        ),
        tutors: Math.min(
          Math.floor(targets.tutors * progress),
          targets.tutors
        ),
        courses: Math.min(
          Math.floor(targets.courses * progress),
          targets.courses
        ),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [start]);

  const statsData = [
    {
      id: 1,
      number: counts.students,
      label: "Active Students",
      icon: "👨‍🎓",
      color: "#4facfe",
    },
    {
      id: 2,
      number: counts.tutors,
      label: "Expert Tutors",
      icon: "👨‍🏫",
      color: "#00f2fe",
    },
    {
      id: 3,
      number: counts.courses,
      label: "Courses",
      icon: "📚",
      color: "#43e97b",
    },
  ];

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">Our Impact Active Students and export </h2>
          <p className="stats-subtitle">
            <h2>Join thousands of students learning with expert tutors</h2>
          </p>
        </div>

        <div className="stats-grid">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className={`stat-card ${start ? "animate" : ""}`}
              style={{ "--stat-color": stat.color }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <span className="stat-number">
                  {stat.number.toLocaleString()}+
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
              <div className="stat-background"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;