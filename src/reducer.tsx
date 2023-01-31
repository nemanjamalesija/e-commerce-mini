import { ACTIONS, stateType } from './constants/types';

const reducer = (state: stateType, action: ACTIONS) => {
  const { type, payload } = action;

  if (type === 'ADD_PRODUCT_TO_CART') {
    if (payload && typeof payload === 'object') {
      const { amount, description, id, name, price } = payload;

      const currentProduct = state.cart.find(
        (product) => product.id === id + 'exists'
      );

      // when add first item, condition is not met => create new product
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
            // update amount for the existing product
            let newAmount: number;
            if (currentProduct.amount) {
              newAmount = amount + currentProduct.amount;
              return { ...product, amount: newAmount };
              // 2 if statements => 2 else
            } else return product;
          } else return product;
        }) as stateType['cart'];

        return { ...state, cart: newCard };
      }
    }
  }

  if (type === 'ADD_ONE_PRODUCT') {
    // find current product
    const newCart = state.cart.map((product) => {
      if (product.id === payload && product.amount) {
        //if exists, update amount
        let newAmount = product.amount + 1;
        return { ...product, amount: newAmount };
        // if not return product as it is
      } else return product;
    });

    return { ...state, cart: newCart };
  }

  if (type === 'REMOVE_ONE_PRODUCT' && typeof payload === 'string') {
    const newCart = state.cart.map((product) => {
      if (product.id === payload && product.amount) {
        let newAmount = product.amount - 1;
        if (newAmount <= 1) newAmount = 1;
        return { ...product, amount: newAmount };
      } else return product;
    });
    return { ...state, cart: newCart };
  }

  if (type === 'SEARCH_FOR_PRODUCT' && typeof payload === 'string') {
    let productsTemp = [...state.products];

    productsTemp = productsTemp.filter((product) =>
      product.name.toLowerCase().includes(payload.toLocaleLowerCase())
    );

    return { ...state, filteredProducts: productsTemp };
  }

  if (type === 'UPDATE_PRODUCTS_NUMBER') {
    const newAmount = state.cart.reduce((acc, product) => {
      if (product.amount) {
        return product.amount + acc;
      } else return acc;
    }, 0) as number;

    return { ...state, totalItems: newAmount };
  }

  if (type === 'UPDATE_TOTAL_PRICE') {
    const newTotalPrice = state.cart
      .map((product) => {
        if (product.amount) return product.price * product.amount;
        else return product.price;
      })
      .reduce((acc, price) => {
        console.log(acc, price);
        if (acc !== undefined && price) {
          console.log('aaa');
          return acc + price;
        } else return acc;
      }, 0) as number;

    return { ...state, totalPrice: newTotalPrice };
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
