import React, { useContext } from 'react';
import './index.css';
import { useReducer } from 'react';
import reducer from './reducer';
import { DUMMY_MEALS } from './data';
import { stateType } from './types';
//////////////context
const initialState: stateType = {
  cart: [],
  products: DUMMY_MEALS,
  filteredProducts: DUMMY_MEALS,
  amount: 0,
  showCart: false,
  totalItems: 0,
};

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
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
