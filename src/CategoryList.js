// src/components/CategoryList.js

import React, { useContext, useEffect } from 'react';
// import { ProductContext } from '../context/ProductContext';
import { ProductContext } from './context/ProductContext';
import axios from 'axios';

const CategoryList = () => {
  const { categories, setCategories } = useContext(ProductContext);

  useEffect(() => {
    // Replace 'API_ENDPOINT_CATEGORIES' with the actual API endpoint for categories
    axios.get('https://dummyjson.com/products')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, [setCategories]);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
