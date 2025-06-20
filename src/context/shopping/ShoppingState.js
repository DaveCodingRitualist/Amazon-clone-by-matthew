import {useReducer} from "react";
import ShoppingContext from "./ShoppingContext";
import {shoppingReducer} from "./shoppingReducer";

export const ShoppingState = (props) => {
  const initialState = { basket: [], user: null };
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  // Selectors
  const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
  };
  const addToBasket = ({item}) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };
  const removeFromBasket = (item) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: item,
    });
  }
  
  const emptyBasket = () => {
    dispatch({
      type: "EMPTY_BASKET", 
    })
  }
  const setUser = (user) => {
    dispatch({
        type: "SET_USER",
        payload: user
    })
  }
  return (
    <ShoppingContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        getBasketTotal,
        addToBasket,
        setUser,
        removeFromBasket,
        emptyBasket
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};
