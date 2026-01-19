
function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              A One Tutions :<br />
              Destination For Tutors<br />
              And Learners
            </h1>

            <p>
              A One Tutions is an online learning and teaching platform that offers
              a wide variety of courses for all ages and levels.
            </p>

            <div class="stats">
          <div class="stat-item">
            <span class="stat-number">10,000+</span>
            <span class="stat-label">Active Students</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">Expert Tutors</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">Courses</span>
          </div>
        </div> 
            <div className="cta-buttons">
              <button className="btn-tutor">
                <span className="btn-icon">✏️</span> Are you a Tutor?
              </button>
              <button className="btn-learner">
                <span className="btn-icon">🔍</span> Looking for a Tutor?
              </button>
            </div>
          </div>

          <div className="image-collage">
            <div className="circle-container circle-large">
              <img src="/Student/Std_1.jpg" alt="Teacher in Classroom" />
            </div>
            <div className="circle-container circle-top-right">
              <img src="/Student/Online Teaching.jpg" alt="Online Teaching" />
            </div>
            <div className="circle-container circle-bottom-right">
              <img src="/Student/Student Learning.jpg" alt="Student Learning" />
            </div>
            <div className="circle-container circle-bottom-left">
              <img src="/Student/Interactive Session.jpg" alt="Interactive Session" />
            </div>
          </div>
        </div>
      </section>
      <section>
        
      </section>
     </>
  );
}

export default Home;
