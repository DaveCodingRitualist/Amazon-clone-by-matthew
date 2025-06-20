import React, { useContext } from "react";
import ShoppingContext from "../context/shopping/ShoppingContext";

const CheckoutProduct = ({ id, image, title, rating, price, hideButton }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { removeFromBasket } = shoppingContext; // Fixed typo here

  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };

  return (
    <div className="checkout_product">
      <img className="checkout_product_image" src={image} alt="" />
      <div className="checkout_product_info">
        <p className="checkout_product_title">{title}</p>

        <div className="checkout_product_rating">
          {[...Array(Number(rating) > 0 ? Math.floor(rating) : 0)].map(
            (_, i) => (
              <p key={i}>⭐</p>
            )
          )}
        </div>

        <p className="checkout_product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        {!hideButton && (
          <button onClick={removeFromBasketHandler}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
