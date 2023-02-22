import React from "react";
import Productlist from "./Productlist";
import data from './ProductListing';

const Home = () => {
  return (
    <>
      <div className="Product-Items">
        {data.productData.map((productitem,productindex)=>{
            return(
                <Productlist
            key={productindex}
            product_title={productitem.title}
            product_description={productitem.desc}
            product_image={productitem.img}
            product_price_new={productitem.price}
            product_price_old={productitem.mrpprice}
            product_item={productitem}    

            />
            )
        })}
        
      </div>
    </>
  );
};

export default Home;
