import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
import { AuthProvider } from './services/AuthContext';
import NotFound from './pages/NotFound';

import '../css/base.css';
import '../css/main.css';

// Separate layout component to handle conditional header rendering
function AppLayout() {
  const location = useLocation();
  
  return (
    <>
      {location.pathname !== '/admin' && <Header />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/event" element={<SingleEvents />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route 
          path="/admin" 
          element={<ProtectedRoute element={<SubscriberAdmin />} />} 
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}


function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </AuthProvider>
  );
}

export default App;
