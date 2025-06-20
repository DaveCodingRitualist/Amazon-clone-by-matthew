import "./App.css";
import { useContext, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductsDetail";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { auth } from "./firebase";
import ShoppingContext from "./context/shopping/ShoppingContext";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

const promise = loadStripe(
  "pk_test_51RQw6GIgBbo8nC2lj8afy1gKSEiB37PihFhxv8snIbUT8LUE8qb8qoXgRRIHMBqpU0h77wnMX2dxMcMOnmZ4C6wY003jjlAbDC"
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", authUser);

      if (authUser) {
        setUser({ authUser });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/checkout">
            <Checkout />
            <Route path="/payment">
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;

// ourdomain.com/ => home screen or home component
// ourdomain.com/products => product list component
// Checkout (isLogin) > Payment (isLogin) > PaidOrder (isLogin)
