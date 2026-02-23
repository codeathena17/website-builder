import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/ui/Navbar"
import Hero from "./components/ui/Hero"
import About from "./components/ui/About"
import HowItWorks from "./components/ui/HowItWorks"
import Features from "./components/ui/Features"
import CTA from "./components/ui/CTA"
import Footer from "./components/ui/Footer"
import Auth from "./components/ui/Auth"


// Home page component that includes all sections
const HomePage = () => (
  <>
    <Navbar/>
    <Hero/>
    <About/>
    <HowItWorks/>
    <Features/>
  
  
    <CTA/>
    <Footer/>
  </>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
         <Route path="/login" element={<Auth />} /> 
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </Router>
  )
}

export default App
