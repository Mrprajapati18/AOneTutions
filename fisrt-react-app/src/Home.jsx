
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

          {/* <div className="image-collage">
            <div className="circle-container circle-large">
              <img src="/Image_1.Jpg" alt="Teacher in Classroom" />
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
          </div> */}
          <div className="image-collage">
          <div className="circle-container circle-large">
              <img src="/Image_1.jpg" alt="Teacher in Classroom" />
          </div>
         <div className="circle-container circle-top-right">
             <img src="/Image_3.jpg" alt="Online Teaching" />
          </div>
         <div className="circle-container circle-bottom-right">
            <img src="/Image_4.jpg" alt="Student Learning" />
          </div>
         <div className="circle-container circle-bottom-left">
           <img src="/Image-2.jpg" alt="Interactive Session" />
         </div>
         </div>
        </div> 
      </section>
     </>
  );
}

export default Home;
