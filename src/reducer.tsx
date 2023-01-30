import { ACTIONS, product, stateType } from './types';

const reducer = (state: stateType, action: ACTIONS) => {
  const { type, payload } = action;

  if (type === 'ADD_PRODUCT_TO_CART') {
    if (payload && typeof payload === 'object') {
      const { amount, description, id, name, price } = payload;

      const currentProduct = state.cart.find(
        (product) => product.id === id + 'exists'
      );

      // when add first item, condition is not met
      if (!currentProduct) {
        const newProduct = {
          id: id + 'exists',
          name,
          price,
          description,
          amount,
        };

        return { ...state, cart: [...state.cart, newProduct] };
      }
      // product with "exists" id is in the cart, iterate through cart
      else {
        const newCard = state.cart.map((product) => {
          if (product.id === id + 'exists') {
            let newAmount: number;
            if (currentProduct.amount) {
              newAmount = amount + currentProduct.amount;
              return { ...product, amount: newAmount };
            }
          } else return product;
        }) as stateType['cart'];

        return { ...state, cart: newCard };
      }
    }
  }

  if (type === 'SHOW_CART' && !payload) {
    return { ...state, showCart: true };
  }

  if (type === 'HIDE_CART' && !payload) {
    return { ...state, showCart: false };
  }

  return { ...state };
};

export default reducer;
