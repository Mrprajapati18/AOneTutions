import React, { useState } from 'react';
import './PricingTestimonials.css';

const PricingTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const pricingPlans = [
    {
      id: 'trial',
      name: 'Trial',
      ribbon: 'Popular',
      icon: '🎯',
      price: '1,500',
      duration: '3 Months Services',
      headerColor: 'orange',
      features: [
        '90 Days Validity',
        'Unlimited Verified Tuitions',
        'Unlimited Contact Views',
        '5 Successful Demos',
        'WhatsApp Chat Support'
      ]
    },
    {
      id: 'silver',
      name: 'Silver',
      badge: 'Best Value',
      icon: '🏆',
      price: '3,540',
      duration: '6 Months Services',
      headerColor: 'orange',
      featured: true,
      features: [
        '180 Days Validity',
        '20 Confirm Tuitions',
        'Response High',
        'Call & WhatsApp Support',
        'Parents Feedback Promotion',
        'No Commissions'
      ]
    },
    {
      id: 'gold',
      name: 'Gold',
      ribbon: 'Premium',
      icon: '💎',
      price: '4,720',
      duration: '6 Months Services',
      headerColor: 'blue',
      features: [
        '180 Days Validity',
        '30 Confirm Tuitions',
        'Unlimited Verified Leads',
        'Call & WhatsApp Support',
        'Profile Advertising',
        'Verified Tutor Batch',
        'No Commissions'
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      message: "I joined the online tuition classes for my daughter who is in Class 11th. The course is designed very well and is easier to understand. The classes are also well-explained. Thanks to the tutors, they are doing a great job.",
      name: "XXXXX - XXXXX",
      location: "Gurgaon",
      website: "#"
    },
    {
      id: 2,
      message: "I was really struggling with my studies earlier but after joining these online tuition classes, things have become much easier to understand. The course is explained really well and I am able to follow it easily. Thank you so much for making things easier for me!",
      name: "XXXXX-XXXXX",
      location: "New Delhi",
      website: "#"
    }
  ];

  return (
    <div className="app-container">
      {/* Pricing Section */}
      <section className="pricing-section">
        <h2 className="pricing-title">Our Packages</h2>
        <p className="pricing-subtitle">Choose the perfect plan for your teaching journey</p>

        <div className="pricing-container">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              data-plan={plan.id}
            >
              {plan.badge && <div className="card-badge">{plan.badge}</div>}
              {plan.ribbon && <div className="card-ribbon">{plan.ribbon}</div>}
              
              <div className={`card-header ${plan.headerColor}`}>
                <div className="header-icon">{plan.icon}</div>
                <h3>{plan.name}</h3>
              </div>

              <div className="card-body">
                <div className="price-wrapper">
                  <span className="currency">₹</span>
                  <h3 className="price">{plan.price}</h3>
                  <span className="price-slash">/-</span>
                </div>
                <p className="duration">{plan.duration}</p>

                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`pay-btn ${plan.headerColor}-btn`}>
                  <span>Pay Now</span>
                  <svg className="btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <span className="small-title">Testimonials</span>
        <h2 className="main-title">Experiences Of Students With Us</h2>

        <div className="testimonial-wrapper">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-box">
              <div className="testimonial-msg">
                {testimonial.message}
              </div>

              <div className="user-info">
                <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="User Avatar" />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                  <a href={testimonial.website}>website</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="dots">
          <span 
            className={activeTestimonial === 0 ? 'active' : ''}
            onClick={() => setActiveTestimonial(0)}
          ></span>
          <span 
            className={activeTestimonial === 1 ? 'active' : ''}
            onClick={() => setActiveTestimonial(1)}
          ></span>
        </div>
      </section>
    </div>
  );
};

export default PricingTestimonials;