import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import Homepage from './pages/Homepage';
import heroIMG from './assets/images/wordsession.jpg';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import SingleEvents from './pages/SingleEvents';
import RegistrationForm from './pages/Register';
import SubscriberAdmin from './pages/Admin';
import Login from './pages/Login';
import ProtectedRoute from './services/ProtectedRoute'
import NotFound from './pages/NotFound';


function App() {
  const location = useLocation();

  return (
    <>

     {/* Conditionally render the Header only if not on the /admin route */}
     {location.pathname !== '/admin' && <Header />}

   <Routes>

   
   <Route path="/" element={<Homepage />} />
   <Route path="/about" element={<AboutUs />} />
   <Route path="/contact" element={<ContactUs />} />
   <Route path="/event" element={<SingleEvents />} />
   <Route path="/register" element={<RegistrationForm />} />
   <Route path="/admin" element={ <ProtectedRoute element={<SubscriberAdmin />}  />} />
   <Route path="/login" element={<Login />} />

   <Route path="*" element={<NotFound />} />
            


   </Routes>
<Footer />


    </>
  )
}

export default App
