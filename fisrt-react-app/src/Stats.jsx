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

  useEffect(() => {
    const handleScroll = () => {
      if (!statsRef.current || start) return;

      const top = statsRef.current.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (top < screenHeight) {
        setStart(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [start]);

  // 🔹 Counter logic
  useEffect(() => {
    if (!start) return;

    const targets = {
      students: 10000,
      tutors: 500,
      courses: 50,
    };

    const interval = setInterval(() => {
      setCounts(prev => ({
        students:
          prev.students < targets.students
            ? prev.students + 100
            : targets.students,
        tutors:
          prev.tutors < targets.tutors
            ? prev.tutors + 5
            : targets.tutors,
        courses:
          prev.courses < targets.courses
            ? prev.courses + 1
            : targets.courses,
      }));
    }, 20);

    return () => clearInterval(interval);
  }, [start]);

  return (
    <>
      <section ref={statsRef} style={{ margin: "80px 0" }}>
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">{counts.students}+</span>
            <span className="stat-label">Active Students</span>
          </div>

          <div className="stat-item">
            <span className="stat-number">{counts.tutors}+</span>
            <span className="stat-label">Expert Tutors</span>
          </div>

          <div className="stat-item">
            <span className="stat-number">{counts.courses}+</span>
            <span className="stat-label">Courses</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
