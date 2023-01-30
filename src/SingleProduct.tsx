import React, { useState } from 'react';
import { useGlobalContext } from './context';

type singleProductProps = {
  name: string;
  description: string;
  price: number;
  id: string;
};

const SingleProduct = (props: singleProductProps) => {
  const { name, description, price, id } = props;
  const [amount, setAmount] = useState(1);

  return (
    <article>
      <div className="item-side-left">
        <h5 className="heading-fifth">{name}</h5>
        <p className="item-description">{description}</p>
        <p className="item-price">{price}$</p>
      </div>
      <div className="item-side-right">
        <div className="item-input-label">
          <label htmlFor="text">Amount</label>
          <input
            name="amount"
            type="number"
            min="1"
            max="99"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="div-btn">
          <button className="btn btn-add">+Add</button>
        </div>
      </div>
    </article>
  );
};

export default SingleProduct;
