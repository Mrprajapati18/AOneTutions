import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <div className="circle-bg"></div>
          <div className="student-img-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=700&fit=crop" 
              alt="Student" 
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h4 className="small-title">A One Tuitions</h4>
          <h2 className="main-title">Working For Your Learning And Success</h2>

          <p className="about-para">
            In recent years, the education sector has seen a dramatic shift with the rise of online learning.
            This has given rise to a new breed of students – those who are not afraid to seek out knowledge
            from anywhere in the world.
          </p>

          <p className="about-para">
            A One Tuitions is a new online learning platform that is shaking up the education sector.
            We provide a space for tutors and students to connect and learn from each other.
          </p>

          <p className="about-para">
            Whether you are looking for someone to teach you a new skill, or you are a tutor who is looking
            for new students, A One Tuitions is the ultimate platform.
          </p>

          <button className="read-btn">
            <span>Read More</span>
            <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path 
                d="M7.5 15L12.5 10L7.5 5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeLinejoin="round" 
              />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;