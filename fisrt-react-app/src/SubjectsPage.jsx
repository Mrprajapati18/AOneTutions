
import React from 'react';
import './SubjectsPage.css';

export default function SubjectsPage() {
  const subjects = [
    'Accounts', 'Biology', 'Hindi', 'Chemistry', 'Geography', 
    'Mathematics', 'Commerce', 'Economics', 'English', 'History', 
    'Science', 'Sanskrit', 'Social science', 'Biotechnology', 
    'Polity', 'Music', 'Others'
  ];

  const graduationOptions = ['BA', 'B.SC', 'Others'];
  const competitionOptions = ['IIT', 'NEET', 'Banking', 'Others'];

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
    <div className="container">
      <h1 className="main-title">Subjects be Provide</h1>
      
      <div className="subjects-section">
        <div className="button-grid">
          {subjects.map((subject, index) => (
            <button 
              key={index} 
              className="subject-btn"
              onClick={() => handleSubjectClick(subject)}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      <div className="sections-wrapper">
        <div className="section">
          <h2 className="section-title">Graduation</h2>
          <div className="button-row">
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

        <div className="section">
          <h2 className="section-title">Competition</h2>
          <div className="button-row">
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
    </div>
    
  );
}