import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './pages/Homepage';
import heroIMG from './assets/images/wordsession.jpg';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import SingleEvents from './pages/SingleEvents';


function App() {


  return (
    <>
 <Header />
   <Routes>

   
   <Route path="/" element={<Homepage />} />
   <Route path="/about" element={<AboutUs />} />
   <Route path="/contact" element={<ContactUs />} />
   <Route path="/event" element={<SingleEvents />} />



   </Routes>
<Footer />


    </>
  )
}

export default App
