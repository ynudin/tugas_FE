import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductShow from './components/ProductShow';
import CartList from './components/CartList'; // Pastikan ini adalah komponen yang menampilkan item keranjang

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /><ProductShow /></>} />
          <Route path="/cart" element={<CartList />} /> {/* Rute untuk halaman keranjang */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
