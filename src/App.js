import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Inventory from './components/Inventory/Inventory';
import NoMatch from './components/NoMatch/NoMatch';
import { createContext, useState } from 'react';
import Review from './components/Review/Review';

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    const sameProduct = newCart.filter(pd => pd.key === product.key);
    product.quantity = sameProduct.length;
    product.stock = product.stock - 1;
    setCart(newCart);
  }

  const removeDuplicates = (cart) => {
    return cart.filter((a, b) => cart.indexOf(a) === b);
  }
  const removeSameProductShowing = removeDuplicates(cart);

  const handleRemoveProduct = (product) => {
    if (product.quantity === 1) {
      const findProduct = cart.find(pd => pd.key === product.key);
      findProduct.stock += 1;
      findProduct.quantity -= 1;
     const currentProduct = cart.filter(pd => pd.key !== product.key);
      setCart(currentProduct);
    } else {
      const findProduct = cart.find(pd => pd.key === product.key);
      findProduct.quantity -= 1;
      findProduct.stock += 1;
      const updateCart = [...cart, findProduct];
      setCart(updateCart);
    }
  }

  return (
    <cartContext.Provider value={{cart, setCart, handleAddProduct, removeSameProductShowing, handleRemoveProduct}}>
    <Router>
    <Navbar/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/ProductDetails/:productId">
          <ProductDetails/>
        </Route>
        <Route path="/review">
          <Review/>
        </Route>
        <Route path="/inventory">
          <Inventory/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
    </cartContext.Provider>
  );
}

export default App;
