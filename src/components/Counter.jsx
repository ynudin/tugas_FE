import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Items in Cart: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add Item</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Remove Item</button>
    </div>
  );
};

export default Counter;
