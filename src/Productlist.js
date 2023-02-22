import React from "react";
import { useCart } from 'react-use-cart';

const Productlist = (props) => {
    const { addItem } = useCart();  

  return (
    <>
      <div className="card mb-3 shadow">
        <div className="card-body">
          <div className="">
            <div className="mb-3">
              <img
                src={props.product_image}
                alt={props.product_image}
                className="img-fluid w-100 product_image shadow-sm"
              />
            </div>
            <div className="">
              <div className="row">
                <div className="mb-4">
                  <h5 className="card-title d-flex justify-content-between">
                    {props.product_title}
                    <span className="product_price ">
                      <span className="product_price_new mx-2">₹ {props.product_price_new}</span>
                      <span className="product_price_old fs-6 text-secondary text-decoration-line-through">₹ {props.product_price_old}</span>
                    </span>
                  </h5>
                  <p className="card-text">{props.product_description}</p>
                </div>
                <div className="text-end">
                  <button className="btn btn-primary shadow-sm" onClick={() =>addItem(props.product_item)}>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productlist;
