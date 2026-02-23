import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import HowItWorks from "./components/HowItWorks"
import Features from "./components/Features"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Auth from "./components/Auth"


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
