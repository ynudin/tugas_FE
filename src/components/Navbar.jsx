import React from 'react';
import { Link } from 'react-router-dom'; // Tambahkan baris ini
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>YanStore</h1>
      <ul>
        <li>
          <Link to="/">Beranda</Link> {/* Gunakan Link untuk navigasi */}
        </li>
        <li>
          <Link to="/products">Produk</Link>
        </li>
        <li>
          <Link to="/cart">Keranjang</Link>
        </li>
        <li>
          <Link to="/about">Tentang Kami</Link>
        </li>
        <li>
          <button className="login-button">Login/Registrasi</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
