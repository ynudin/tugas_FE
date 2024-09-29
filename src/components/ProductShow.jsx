import React, { useEffect, useState } from 'react';
import './ProductShow.css'; // Import style jika ada

function ProductShow() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State untuk produk yang dipilih
  const [cart, setCart] = useState([]); // State untuk keranjang

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set produk yang dipilih
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null); // Tutup detail produk
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]); // Tambahkan produk ke keranjang
    alert(`${product.title} has been added to your cart!`); // Notifikasi sederhana
    setSelectedProduct(null); // Tutup detail setelah menambahkan ke keranjang
  };

  return (
    <div className="product-show">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="product-item" 
            onClick={() => handleProductClick(product)} // Tambahkan onClick
          >
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && ( // Tampilkan detail produk jika ada produk yang dipilih
        <div className="product-detail">
          <button onClick={handleCloseDetail}>Close</button>
          <h2>{selectedProduct.title}</h2>
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.title} 
            className="detail-image" // Tambahkan class untuk pengaturan ukuran
          />
          <p>{selectedProduct.description}</p>
          <p>Price: ${selectedProduct.price}</p>
          <button onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button> {/* Tombol untuk menambahkan ke keranjang */}
        </div>
      )}
    </div>
  );
}

export default ProductShow;
