import React from 'react';
import { useGlobalContext } from './context';
import SingleCartItem from './SingleCartItem';

const Cart = () => {
  const { cart, hideCartHandler } = useGlobalContext();
  return (
    <div className="cart-div-one">
      {cart.map((item) => {
        return <SingleCartItem key={item.id} {...item} />;
      })}
      <button className="btn btn-go-to-cart" onClick={hideCartHandler}>
        Back to Products
      </button>
    </div>
  );
};

export default Cart;
