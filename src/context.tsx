import React, { useContext, useEffect } from 'react';
import './index.css';
import { useReducer } from 'react';
import reducer from './reducer';
import { DUMMY_MEALS } from './constants/data';
import { contexStateAndMethods, productWithAmount } from './constants/types';

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
  addOneProductHandler(id: string): void {},
  removeOneProductHandler(id: string): void {},
  searchForItemsHandler(e: React.ChangeEvent<HTMLInputElement>): void {},
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

  const addOneProductHandler: contexStateAndMethods['addOneProductHandler'] = (
    id: string
  ) => {
    dispatch({ type: 'ADD_ONE_PRODUCT', payload: id });
  };

  const removeOneProductHandler: contexStateAndMethods['removeOneProductHandler'] =
    (id: string) => {
      dispatch({ type: 'REMOVE_ONE_PRODUCT', payload: id });
    };

  const searchForItemsHandler: contexStateAndMethods['searchForItemsHandler'] =
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SEARCH_FOR_PRODUCT', payload: e.target.value });
    };

  useEffect(() => {
    dispatch({ type: 'UPDATE_PRODUCTS_NUMBER' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        addToCartHandler,
        showCartHandler,
        hideCartHandler,
        addOneProductHandler,
        removeOneProductHandler,
        searchForItemsHandler,
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
