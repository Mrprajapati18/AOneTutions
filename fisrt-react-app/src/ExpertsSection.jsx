import React, { useRef } from 'react';
import './ExpertsSection.css';

const ExpertsSection = () => {
  const cardsContainerRef = useRef(null);

  const expertsData = [
    {
      id: 1,
      image: "https://i.pravatar.cc/150?img=1",
      name: "XXXXX - XXXXX",
      qualification: "BA, B.ED",
      subject: "I – V Maths",
      experience: "5 Years"
    },
    {
      id: 2,
      image: "https://i.pravatar.cc/150?img=5",
      name: "Dr.XXXXX-XXXXX",
      qualification: "PhD in History",
      subject: "IX – XII History",
      experience: "15 Years"
    },
    {
      id: 3,
      image: "https://i.pravatar.cc/150?img=10",
      name: "XXXXX-XXXXX",
      qualification: "B.Tech CSE",
      subject: "V – XII English",
      experience: "8 Years"
    },
    {
      id: 4,
      image: "https://i.pravatar.cc/150?img=12",
      name: "XXXXX-XXXXX",
      qualification: "M.C.A",
      subject: "X – XII Maths",
      experience: "9 Years"
    },
    {
      id: 5,
      image: "https://i.pravatar.cc/150?img=3",
      name: "XXXXX-XXXXX",
      qualification: "M.Sc Physics",
      subject: "XI – XII Physics",
      experience: "12 Years"
    },
    {
      id: 6,
      image: "https://i.pravatar.cc/150?img=8",
      name: "XXXXX-XXXXX",
      qualification: "MA English",
      subject: "VI – X English",
      experience: "7 Years"
    }
  ];

  const slideLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: -355,
        behavior: 'smooth'
      });
    }
  };

  const slideRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: 355,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="experts-section">
      <div className="experts-container">
        <h2 className="experts-title">Learn With Teaching Experts</h2>
        <p className="experts-subtitle">
          Whether you are a tutor looking for students or a learner looking for a tutor,
          Excellent Tuitions is the ultimate destination for you.
        </p>

        <div className="slider-wrapper">
          <button 
            className="nav-btn left" 
            onClick={slideLeft}
            aria-label="Previous slide"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3"
              strokeLinecap="round" 
              strokeLinejoin="round" 
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="cards-container" ref={cardsContainerRef}>
            {expertsData.map((expert) => (
              <div className="expert-card" key={expert.id}>
                <div className="card-glow"></div>
                <img src={expert.image} alt={`Tutor ${expert.name}`} />
                <h3>{expert.name}</h3>
                <div className="details">
                  <p>
                    <b>Qualification</b>
                    {expert.qualification}
                  </p>
                  <p>
                    <b>Subject</b>
                    {expert.subject}
                  </p>
                  <p>
                    <b>Experience</b>
                    {expert.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="nav-btn right" 
            onClick={slideRight}
            aria-label="Next slide"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3"
              strokeLinecap="round" 
              strokeLinejoin="round" 
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;