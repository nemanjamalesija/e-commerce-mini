import { ACTIONS, product, stateType } from './types';

const reducer = (state: stateType, action: ACTIONS) => {
  const { type, payload } = action;

  if (type === 'ADD_PRODUCT_TO_CART') {
    const { amount, description, id, name, price } = payload;

    const currentProduct = state.cart.find(
      (product) => product.id === id + 'exists'
    );
    if (!currentProduct) {
      const newProduct = {
        id: id + 'exists',
        name,
        price,
        description,
        amount,
      };

      return { ...state, cart: [...state.cart, newProduct] };
    } else {
      const newCard: stateType['cart'] = state.cart.map((product) => {
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

  return { ...state };
};

export default reducer;
