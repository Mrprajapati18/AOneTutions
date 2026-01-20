import React from "react";
import "./Courses.css";

function Courses() {
  const coursesData = [
    {
      id: 1,
      category: "Basic to advance",
      title: "Language",
      description:
        "Learn a foreign language by online native teacher and increase your employability.",
      buttonText: "Explore Now",
      bgColor: "#ffeaa7",
      buttonColor: "#fdcb6e",
      imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400",
      circleColor: "#f9ca24",
    },
    {
      id: 2,
      category: "Mains to Advance",
      title: "IIT-JEE",
      description:
        "Learn From best teachers from home at anytime at affordable prices.",
      buttonText: "Explore Now",
      bgColor: "#ffecd1",
      buttonColor: "#ff7f50",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
      circleColor: "#ff9966",
    },
    {
      id: 3,
      category: "Basic to advance",
      title: "Compatetive Exam",
      description:
        "Find the best tutor for Copmatetive Exam classes at affordable prices.",
      buttonText: "Explore Now",
      bgColor: "#c7f9cc",
      buttonColor: "#00d2d3",
      imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400",
      circleColor: "#55efc4",
    },
    {
      id: 4,
      category: "Basic to advance",
      title: "Curricular Activities",
      description:
        "Get online Interactive extra curricular classes with best trainer.",
      buttonText: "Explore Now",
      bgColor: "#dfe6e9",
      buttonColor: "#4834df",
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
      circleColor: "#6c5ce7",
    },
  ];

  return (
    <section className="courses-section">
      <div className="courses-container">
        <div className="courses-header">
          <h2 className="courses-main-title">
            Discover Available <span className="highlight">Courses</span>
          </h2>
        </div>

        <div className="courses-grid">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="course-card"
              style={{ backgroundColor: course.bgColor }}
            >
              <div className="course-content">
                <span className="course-category">{course.category}</span>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <button
                  className="course-button"
                  style={{ backgroundColor: course.buttonColor }}
                >
                  {course.buttonText}
                </button>
              </div>

              <div className="course-image-wrapper">
                <div
                  className="circle-bg"
                  style={{ backgroundColor: course.circleColor }}
                ></div>
                <div className="decorative-circle"></div>
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="course-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;