import React from 'react';
import SingleProduct from './components/SingleProduct';
import Header from './components/Header';
import Cart from './components/Cart';
import { useGlobalContext } from './context';

function App() {
  const { filteredProducts, showCart, showCartHandler, searchForItemsHandler } =
    useGlobalContext();

  return (
    <div>
      <section className="section section-meals">
        <Header />
        {!showCart && (
          <input type="text" name="name" onChange={searchForItemsHandler} />
        )}
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
