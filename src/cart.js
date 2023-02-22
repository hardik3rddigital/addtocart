import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 className="fs-4">Cart is Empty</h1>;
  
  return (
    <>
      <h1 className="fs-4">Cart</h1>
      <div className="">
        <div className="">
          {items.map((item, index) => {
            return (
              <>
                <div className="card shadow mb-3">
                  <div className="">
                    <div className="CartImage p-3">
                      <img
                        src={item.img}
                        alt={item.img}
                        className="img-fluid w-100 product_image shadow-sm"
                      />
                    </div>
                    <div className="card-body pt-0">
                      <h2 className="fs-6">{item.title}</h2>
                      <span className="product_price">
                        <span className="product_price_new">
                          ₹ {item.price}
                        </span>
                      </span>

                      <div className="d-flex mt-1 justify-content-between">
                        <div className="col-md-8 col-6">
                          <div className="border shadow-sm h-100 d-flex justify-content-center align-items-center">
                            Quantity ({item.quantity})
                          </div>
                        </div>
                        <div className="col-md-3 col-6 d-flex justify-content-between align-items-center">
                          <button
                            className="btn btn-danger shadow-sm"
                            onClick={() => {
                              updateItemQuantity(item.id, item.quantity - 1);
                            }}
                          >
                            -
                          </button>
                          <button
                            className="btn btn-success shadow-sm"
                            onClick={() => {
                              updateItemQuantity(item.id, item.quantity + 1);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="mt-2">
                        <button
                          className="btn btn-danger shadow-sm"
                          onClick={() => {
                            removeItem(item.id);
                          }}
                        >
                          Remove Item
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="">
        <div className="">
          <h5>Total Price: ₹ {cartTotal}</h5>
        </div>

        <div className="">
          <button className="btn btn-danger" onClick={() => emptyCart()}>
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
