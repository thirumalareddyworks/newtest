// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import CategoryList from './CategoryList';
// import { ProductContext } from './context/ProductContext';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (

    <Router>
    <ProductProvider>
      <Routes>
        <Route path="/" element={<React.Fragment><SearchBar /><ProductList /></React.Fragment>} />
        <Route path="/categories" element={<CategoryList />} />
      </Routes>
    </ProductProvider>
  </Router>

    // <Router>
    //   <ProductProvider>
    //     {/* <Switch> */}
    //       <Route path="/" exact>
    //         <SearchBar />
    //         <ProductList />
    //       </Route>
    //       <Route path="/categories">
    //         <CategoryList />
    //       </Route>
    //     {/* </Switch> */}
    //   </ProductProvider>
    // </Router>
  );
}

export default App;
