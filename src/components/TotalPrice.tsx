import React from 'react';
import { useGlobalContext } from '../context';

const TotalPrice = () => {
  const { totalPrice, showCart } = useGlobalContext();
  return (
    <section
      className={
        showCart
          ? 'section section-total-price total-price-margin'
          : 'section section-total-price'
      }
    >
      <div>
        <h3>Total price:</h3>
        <p className="total-price">{totalPrice.toFixed(2)}$</p>
      </div>
    </section>
  );
};

export default TotalPrice;
