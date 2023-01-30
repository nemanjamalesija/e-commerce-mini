import React, { useContext } from 'react';
import './index.css';
import { useReducer } from 'react';
import reducer from './reducer';
import { DUMMY_MEALS } from './data';
import { stateType, productWithAmount } from './types';

//////////////context
type context = stateType & {
  addToCartHandler({
    id,
    name,
    price,
    description,
    amount,
  }: productWithAmount): void;
};

const initialState: context = {
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
};

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCartHandler = ({
    id,
    name,
    price,
    description,
    amount,
  }: productWithAmount) => {
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      payload: { id, name, price, description, amount },
    });
  };
  console.log(state.cart);

  return (
    <AppContext.Provider
      value={{
        ...state,
        addToCartHandler,
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
