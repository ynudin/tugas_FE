import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Keranjang() {
  // Tambahkan logika untuk menampilkan item di keranjang
  return (
    <div>
      <Navbar />
      <div className="cart-details">
        {/* Detail keranjang */}
      </div>
      <Footer />
    </div>
  );
}

export default Keranjang;
