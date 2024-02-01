// src/components/ProductList.js

import React, { useContext, useEffect, useState } from 'react';
// import { ProductContext } from '../context/ProductContext';
import axios from 'axios';
import { ProductContext } from './context/ProductContext';

const ProductList = () => {
    const [products, setProducts] = useState([])
//   const [ products, setProducts ] = useContext([ProductContext]);


useEffect(() => {
    axios.get('https://dummyjson.com/products/category/smartphones')
      .then(response => {
        console.log('API Response:', response.data);
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [setProducts]);
  



//   useEffect(() => {
//     // Replace 'API_ENDPOINT_PRODUCTS' with the actual API endpoint for product listing
//     axios.get('https://dummyjson.com/products/category/smartphones')
//       .then(response => setProducts(response.data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, [setProducts]);

  return (

    <div>
    <h2>Product List</h2>
    <ul>
      {Array.isArray(products) && products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  </div>

    // <div>
    //   <h2>Product List</h2>
    //   <ul>
    //     {products.map(product => (
    //       <li key={product.id}>{product.name}</li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default ProductList;
