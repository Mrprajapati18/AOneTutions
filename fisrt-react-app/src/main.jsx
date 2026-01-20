// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import './index.css'
// import './App.css'
// import './SubjectsPage.css'
// import './AboutSection.css'
// import App from './App.jsx'
// import Home from './Home.jsx'
// import SubjectsPage from './SubjectsPage.jsx'
// import AboutSection from './AboutSection.jsx'
// import ExpertsSection from './ExpertsSection.jsx'
// import PricingTestimonials from './PricingTestimonials.jsx'
// import Footer from './Footer.jsx'
// import Stats from './Stats.jsx'
// import Navbar from './Components/Navbar.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Navbar/>
//     <Home />
//      {/* <Stats /> */}
//     <SubjectsPage />
//     <AboutSection />
//     <ExpertsSection />
//     <PricingTestimonials />
//     <Footer />
//   </StrictMode>
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './App.css'
import './SubjectsPage.css'
import './AboutSection.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)