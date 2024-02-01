// src/components/SearchBar.js

import React, { useState, useContext } from 'react';
// import { ProductContext } from '../context/ProductContext';
import { ProductContext } from './context/ProductContext';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { setProducts } = useContext(ProductContext);

  const handleSearch = () => {
    // Replace 'API_ENDPOINT_SEARCH' with the actual API endpoint for search
    axios.get(`https://dummyjson.com/products/search?q=phone?term=${searchTerm}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error searching products:', error));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
