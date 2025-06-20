import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="Seagate Portable 2TB External Hard Drive Portable HDD - USB 3.0
                 for PC, Mac, PlayStation, & Xbox - 1 year Rescue Service (STGX2000400)"
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
          rating={4}
          price={59.99}
        />
      {/* </div>
      <div className="products_row"> */}
        <Product
          id="1234567"
          title="Razor Cynosa Chroma Gaming Keyboard: Individually Backlit RGB Keys - Spill-Resistant design - Programmable Macro Functionality - Queit & Cushioned"
          image="https://images-na.ssl-images-amazon.com/images/I/61WgmLgwuQL._AC_SX300_SY300_QL70_FMwebp_.jpg"
          rating={5}
          price={34.99}
        />

        </div>
<div className="products_row">
        <Product
          id="1234567"
          title="Weber Compact Kettle Charcoal Grill Braai, 57 cm Diameter"
          image="https://m.media-amazon.com/images/I/71aR5dcoAVL._AC_SY450_.jpg"
          rating={4}
          price={99.99}
        />
        {/* </div>
        <div className="products_row"> */}
        <Product
          id="1234567"
          title="Satiskin Floral Bouquet Bubble Bath 2 Litre"
          image="https://m.media-amazon.com/images/I/71UPfhv74BL._AC_SY300_SX300_.jpg"
          rating={4.9}
          price={3.99}
        />
      {/* </div>
      <div className="products_row"> */}
        <Product
          id="1234567"
          title="BOSCH MUMS2EW00 Series 2 MUM Kitchen Machine 700 W, White"
          image="https://m.media-amazon.com/images/I/718kipVcEaL._AC_SX569_.jpg"
          rating={4.5}
          price={59.99}
        />
      </div>
      <div className="products_row">
        <Product
          id="1234567"
          title="Gillette Mach3+ Blade refills x"
          image="https://m.media-amazon.com/images/I/41s321VX-hL._SR480,440_.jpg"
          rating={5}
          price={15.99}
        />
      </div>
    </>
  );
};

export default Products;
