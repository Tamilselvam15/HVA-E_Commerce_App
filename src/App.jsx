import Header from "./components/Header/Header"
import './App.css'
import Product_card from "./Product_Card/Product_card"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import RandomProducts from "./components/Random_Products/RandomProducts"
import SelectedCategory from "./components/SelectedCategory/SelectedCategory"
import CartItems from "./components/cart_Items/CartItems"
function App() {
  
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<RandomProducts />} />
        <Route path="/:category" element={<SelectedCategory />} />
        <Route path='/:category/:id' element={<Product_card />} />
        <Route path='/cartItems' element={<CartItems/> } />
      </Routes>
    </BrowserRouter>

  )
}

export default App
