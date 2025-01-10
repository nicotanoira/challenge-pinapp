'use client';

import React from 'react';
// import { useCart } from '@/context/CartContext'; this is just going too far :)

interface AddToCartButtonProps {
  sku?: string;
  name: string;
  price?: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ name }) => {
  // const { addToCart, cart } = useCart();

  const handleAddToCart = () => {
    // addToCart(sku, name, price); this is just going too far :) 
    alert(`${name} added to cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-500 w-fit self-end text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
