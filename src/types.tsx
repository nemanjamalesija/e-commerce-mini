export type product = {
  id: string;
  name: string;
  description: string;
  price: number;
  amount?: number;
};

export type productWithAmount = product & {
  amount: number;
};

export type stateType = {
  cart: product[];
  products: product[];
  filteredProducts: product[];
  amount: number;
  showCart: boolean;
  totalItems: number;
};

export type ACTIONS = {
  readonly type:
    | 'ADD_PRODUCT_TO_CART'
    | 'FIND_PRODUCT_SEARCH'
    | 'UPDATE_PRODUCTS_NUMBER'
    | 'ADD_ONE_PRODUCT';

  readonly payload: productWithAmount;
};
