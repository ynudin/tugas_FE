import React from 'react';
import CartItem from './CartItem'; // Pastikan Anda memiliki komponen CartItem

const CartList = () => {
  const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 20 },
  ];

  return (
    <div>
      <h2>Keranjang Anda</h2>
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
