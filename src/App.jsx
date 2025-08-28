// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
  

//   return (
//     <>

//     </>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
// import logo from './IMAGES/logo.svg';
import Footer from './Footer';
import ScrollToTop from './assets/ScrollToTop';
import InfiniteBanner from './InfiniteBanner';



function App() {
  return (
    <div className=' flex items-center justify-center flex-col'> 
    <Router>
       <ScrollToTop/>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <InfiniteBanner/>
    <Footer/>
     </div>
  );
}

export default App;
