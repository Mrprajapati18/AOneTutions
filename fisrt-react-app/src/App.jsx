import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import SubjectsPage from './SubjectsPage'
import AboutSection from './AboutSection'
import ExpertsSection from './ExpertsSection'
import PricingTestimonials from './PricingTestimonials'
import Footer from './Footer'
import Navbar from './Components/Navbar'
import About from "./Pages/About"
import Contact from './Pages/Contact'
import Stats from './Stats'
import Courses from './Courses'

function App() {
  return (
    <> 
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            {/* <SubjectsPage />  */}
            <Courses />
            <Stats />
            <AboutSection />
            <ExpertsSection />
            <PricingTestimonials />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>      
      <Footer />       
    </>
  )
}

export default App