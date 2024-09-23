import { LuShoppingCart } from "react-icons/lu";
import trendImage from "./images/hva.png";
import { CiSearch } from "react-icons/ci";
import './Header.css'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Header = () => {
    const[cartItems,setCartItems]=useState([])
    const cartArray = useSelector((state) => state.productInfo.cart)
    const navigate = useNavigate()
    // const param=useParams()
    // console.log(cartItems)
    useEffect(() => {
        if (cartArray) {
            setCartItems(
               cartArray
            )
        }
    
     },[cartArray, cartItems])
  
    const handleviewCartItems = () => {
        navigate('/cartItems') 
    }
    const handleGotoOrder = () => {
        navigate('/Order')
    }

  return (
      <div className="head" >
           <div className="Header-Container">
          <div className="Platform-name">
              <img src={trendImage} alt="name" />
          </div>
              <div className="header_frame1">
              <CiSearch className="search-icon" />
              <input type="text" className="search-box" placeholder="Search for Products , Brands and More" />
               </div>

              <div className="header_frame2">
                  <div className="cart-items" onClick={()=>handleviewCartItems()}>
                      <LuShoppingCart className="cart-icon" />
                      <span>{cartItems.length-1+1 }</span>
                      <p>Cart</p>
                  </div>
               <button className="My-Order-Button" onClick={()=>handleGotoOrder()}>My Orders</button><br />
               <button className="Admin_button">Admin</button>
          </div>
          

          </div>    
         
      </div>
  )
}

export default Header