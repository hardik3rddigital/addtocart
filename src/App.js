import React from "react";

import Home from "./Home";
import Cart from "./cart";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/css/cart.css';

import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <>
      <CartProvider>
      <section className="ShoppingMart">
        <div className="container p-3">
          <h2 className="ProductListingTitle">Product Listing</h2>
          <div className="d-flex justify-content-between">
              <div className="col-lg-7 col-md-6 col-sm-6 p-3 border"><Home /></div>
              <div className="col-lg-4 col-md-6 col-sm-6 p-3 border"><Cart /></div>
          </div>
        </div>
      </section>
      </CartProvider>
    </>
  );
}

export default App;
