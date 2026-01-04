import { Routes, Route, Router } from 'react-router-dom'
import './App.css'
import Home from './Home'
import SubjectsPage from './SubjectsPage'
import AboutSection from './AboutSection'
import ExpertsSection from './ExpertsSection'
import PricingTestimonials from './PricingTestimonials'
import Footer from './Footer'
import Stats from './Stats'

function App() {
  return (
    <>
      <Home />
      {/* <Stats /> */}
      <SubjectsPage />     
      <AboutSection />
      <ExpertsSection />
      <PricingTestimonials />
      <Footer />
    </>
  )
  
}

export default App