import React from 'react';
import { product } from '../constants/types';
import { useGlobalContext } from '../context';

const SingleCartItem = (props: product) => {
  const { id, name, amount, price, description } = props;
  const { addOneProductHandler, removeOneProductHandler } = useGlobalContext();

  return (
    <article>
      <div className="item-side-left">
        <h5 className="heading-fifth">{name}</h5>
        <p className="item-description">{description}</p>
        <p className="item-price">{price}$</p>
      </div>
      <div className="item-side-right">
        <div className="update-amount-div">
          <button
            className="btn btn-minus"
            onClick={() => removeOneProductHandler(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon-cart-item"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <p className="amount">{amount}</p>
          <button
            className="btn btn-plus"
            onClick={() => addOneProductHandler(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon-cart-item"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleCartItem;
