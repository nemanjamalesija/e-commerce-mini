import React from 'react';
import { useGlobalContext } from '../context';
import SingleProduct from './SingleProduct';

const ParentSingleProduct = () => {
  const { filteredProducts } = useGlobalContext();
  return (
    <section className="container container-meals">
      {filteredProducts.map((item) => {
        return <SingleProduct key={item.id} {...item} />;
      })}
    </section>
  );
};

export default ParentSingleProduct;
