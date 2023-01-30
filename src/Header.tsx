import React from 'react';
import { useGlobalContext } from './context';

const Header = () => {
  const { amount } = useGlobalContext();

  return (
    <div className="react-meals-header">
      <div className="logo">React Meals</div>
      <div className="cart-div">
        <p className="cart-p">Your cart:</p>
        <p className="cart-value">{amount}</p>
      </div>
    </div>
  );
};

export default Header;
