import './App.css';
import Product_card from "./Product_Card/Product_card";
import {  HashRouter, Route, Routes } from 'react-router-dom';
import RandomProducts from "./components/Random_Products/RandomProducts";
import SelectedCategory from "./components/SelectedCategory/SelectedCategory";
import CartItems from "./components/cart_Items/CartItems";
import Order from "./components/OrderPage/Order";
import Login from "./login/login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
     <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<RandomProducts />} />
          <Route path="/:category" element={<SelectedCategory />} />
          <Route path="/:category/:id" element={<Product_card />} />
          <Route path="/cartItems" element={<CartItems />} />
          <Route path="/cartItems/Order" element={<Order />} />
          <Route path='/Order' element={<Order/> } />
        </Route>
      </Routes>

     
    </HashRouter>
  );
}

export default App;

