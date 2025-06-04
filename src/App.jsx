import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialButtons from './components/SocialButtons';
import Footer from './components/Footer'; // ✅ import footer
import Home from './pages/Home';

export default function App() {
  useEffect(() => {
    const options = { autoConfig: true, debug: false };
    ReactPixel.init('YOUR_PIXEL_ID', undefined, options);
    ReactPixel.pageView();
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        <SocialButtons />
        <Footer /> {/* ✅ Footer selalu tampil */}
      </div>
    </Router>
  );
}
