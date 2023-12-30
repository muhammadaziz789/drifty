// QuantityCalculator.js

import React, { useState } from "react";

const QuantityCalculator = ({ onChange = () => {} }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    onChange(quantity + 1);
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default QuantityCalculator;
