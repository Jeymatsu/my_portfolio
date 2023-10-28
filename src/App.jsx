import { useState,useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './components/Hero';


function App() {

  const homeref = useRef(null);
  const featuresRef = useRef(null);
  const chooseUsRef = useRef(null);
  const leadershipRef = useRef(null);
  const faqRef = useRef(null);
  const getAppRef = useRef(null);

  return (
    <div className='bg-[#f4f8fd]'>
       <Router>
       <Navbar homeref={homeref}
        featuresRef={featuresRef}
        chooseUsRef={chooseUsRef}
        leadershipRef={leadershipRef}
        faqRef={faqRef}
        getAppRef={getAppRef}
        />

        <Landing/>
       
       </Router>
      
    </div>
  )
}

export default App
