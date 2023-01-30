import React from 'react';
import SingleProduct from './SingleProduct';
import Header from './Header';
import { useGlobalContext } from './context';

function App() {
  const { filteredProducts, showCart } = useGlobalContext();

  return (
    <div>
      <section className="section section-meals">
        <Header />
        {!showCart && <input type="text" name="name" />}
        {!showCart && (
          <div className="container container-meals">
            {filteredProducts.map((item) => {
              return <SingleProduct key={item.id} {...item} />;
            })}
          </div>
        )}
        {!showCart && (
          <button className="btn btn-go-to-cart">Go to your cart</button>
        )}
      </section>
    </div>
  );
}

export default App;
