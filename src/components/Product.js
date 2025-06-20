import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./Product.css";
import ShoppingContext from "../context/shopping/ShoppingContext";

const Product = ({ id, image, title, rating, price }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { addToBasket } = shoppingContext;

  const addToBasketHandler = () => {
    addToBasket({ item: { id, image, title, rating, price } });
  };
  Product.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  };

  return (
    <div className="product" key={id}>
      <img src={image} alt="" />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          {[...Array(Number(rating) > 0 ? Math.floor(rating) : 0)].map((i) => (
            <p key={i}>⭐</p>
          ))}
        </div>

        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <button className="product_button" onClick={addToBasketHandler}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
