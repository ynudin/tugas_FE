import React from 'react';
import './Hero.css';
import heroImage from '../assets/portrait-confident-young-man-removebg-preview.png'; // Mengimpor gambar

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Koleksi Fashion Terbaru</h1>
          <p>“Temukan tren fashion terkini dan dapatkan penawaran eksklusif hanya di sini!”</p>
          <button className="hero-button">Belanja Sekarang</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Fashion Collection" />
        </div>
      </div>
    </section>
  );
}

export default Hero;