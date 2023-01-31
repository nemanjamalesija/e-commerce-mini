import React from 'react';
import { useGlobalContext } from '../context';

const GoToCart = () => {
  const { showCartHandler } = useGlobalContext();
  return (
    <button className="btn btn-go-to-cart" onClick={showCartHandler}>
      Go to your cart
    </button>
  );
};

export default GoToCart;
