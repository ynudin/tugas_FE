import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductShow from '../components/ProductShow';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductShow />
      <Footer />
    </div>
  );
}

export default Home;
