import React from 'react';
import { useGlobalContext } from '../context';
import BackToProducts from './BackToProducts';
import SingleCartItem from './SingleCartItem';

const Cart = () => {
  const { cart } = useGlobalContext();

  if (cart.length === 0)
    return (
      <section>
        <h1 className="heading-empty-cart">Your cart is empty...</h1>;
        <BackToProducts />
      </section>
    );

  return (
    <section className="cart-div-one">
      <div className="cart-container">
        {cart.map((item) => {
          return <SingleCartItem key={item.id} {...item} />;
        })}
      </div>
      <BackToProducts />
    </section>
  );
};

export default Cart;
