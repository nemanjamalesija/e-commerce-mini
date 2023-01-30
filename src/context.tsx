import React, { useContext } from 'react';
import './index.css';
import { useReducer } from 'react';
import reducer from './reducer';
import { DUMMY_MEALS } from './data';
import { contexStateAndMethods, productWithAmount } from './types';

//////////////context

const initialState: contexStateAndMethods = {
  cart: [],
  products: DUMMY_MEALS,
  filteredProducts: DUMMY_MEALS,
  amount: 0,
  showCart: false,
  totalItems: 0,
  addToCartHandler({
    id,
    price,
    description,
    amount,
  }: productWithAmount): void {},
  showCartHandler(): void {},
  hideCartHandler(): void {},
};

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCartHandler: contexStateAndMethods['addToCartHandler'] = ({
    id,
    name,
    price,
    description,
    amount,
  }) => {
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      payload: { id, name, price, description, amount },
    });
  };

  const showCartHandler: contexStateAndMethods['showCartHandler'] = () => {
    dispatch({ type: 'SHOW_CART' });
  };

  const hideCartHandler: contexStateAndMethods['hideCartHandler'] = () => {
    dispatch({ type: 'HIDE_CART' });
  };

  console.log(state);

  return (
    <AppContext.Provider
      value={{
        ...state,
        addToCartHandler,
        showCartHandler,
        hideCartHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
