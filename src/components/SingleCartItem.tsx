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
            -
          </button>
          <p className="amount">{amount}</p>
          <button
            className="btn btn-plus"
            onClick={() => addOneProductHandler(id)}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleCartItem;
