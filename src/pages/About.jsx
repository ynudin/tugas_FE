import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-us">
        <h2>Tentang Kami</h2>
        <p>Ini adalah halaman tentang kami.</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
