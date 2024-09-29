import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>YanStore</h2>
          <p>
            YanStore adalah destinasi utama Anda untuk menemukan pakaian trendi dan berkualitas.
            Kami berkomitmen untuk memberikan koleksi fashion yang memadukan gaya, kenyamanan, 
            dan harga terjangkau.
          </p>
          <p>Email: Info@yanstore.com</p>
        </div>
        <div className="footer-links">
          <h3>Site Link</h3>
          <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Produk</a></li>
            <li><a href="#">Keranjang</a></li>
            <li><a href="#">Tentang Kami</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Sosial Media</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Create by yanaudin | © 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
