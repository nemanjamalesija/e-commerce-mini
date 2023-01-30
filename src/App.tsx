import React from 'react';
import SingleProduct from './SingleProduct';
import Header from './Header';
import Cart from './Cart';
import { useGlobalContext } from './context';

function App() {
  const { filteredProducts, showCart, showCartHandler } = useGlobalContext();

  return (
    <div>
      <section className="section section-meals">
        <Header />
        {!showCart && <input type="text" name="name" />}
        {showCart && <Cart />}
        {!showCart && (
          <div className="container container-meals">
            {filteredProducts.map((item) => {
              return <SingleProduct key={item.id} {...item} />;
            })}
          </div>
        )}
        {!showCart && (
          <button className="btn btn-go-to-cart" onClick={showCartHandler}>
            Go to your cart
          </button>
        )}
      </section>
    </div>
  );
}

export default App;
