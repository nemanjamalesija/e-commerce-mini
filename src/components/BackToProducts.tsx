import React from 'react';
import { useGlobalContext } from '../context';

const BackToProducts = () => {
  const { hideCartHandler } = useGlobalContext();
  return (
    <button className="btn btn-go-to-cart" onClick={hideCartHandler}>
      Back to Products
    </button>
  );
};

export default BackToProducts;
