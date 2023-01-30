export type product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type stateType = {
  cart: product[];
  products: product[];
  filteredProducts: product[];
  amount: number;
  showCart: boolean;
  totalItems: number;
};
