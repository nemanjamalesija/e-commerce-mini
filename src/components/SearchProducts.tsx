import React from 'react';
import { useGlobalContext } from '../context';

const SearchProducts = () => {
  const { searchForItemsHandler } = useGlobalContext();

  return (
    <div>
      <label className="search-label">Search product</label>
      <input type="text" name="name" onChange={searchForItemsHandler} />
    </div>
  );
};

export default SearchProducts;
