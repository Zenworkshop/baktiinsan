import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialButtons from './components/SocialButtons';
import Footer from './components/Footer'; // ✅ import footer
import Home from './pages/Home';
import Donasi from './pages/Donasi';

export default function App() {
  useEffect(() => {
    const options = { autoConfig: true, debug: false };
    ReactPixel.init('123456789012345'); // Ganti dengan ID asli kamu dari Meta Business
    ReactPixel.pageView();
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donasi" element={<Donasi />} />
          </Routes>
        </div>

        <SocialButtons />
        <Footer /> {/* ✅ Footer selalu tampil */}
      </div>
    </Router>
  );
}
