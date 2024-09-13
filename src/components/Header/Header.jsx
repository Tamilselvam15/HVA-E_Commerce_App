import { LuShoppingCart } from "react-icons/lu";
import trendImage from "./images/hva.png";
import { CiSearch } from "react-icons/ci";
import './Header.css'
const header = () => {


  


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
                  <div className="cart-items">
                      <LuShoppingCart className="cart-icon" />
                      <p>Cart</p>
                  </div>
              
               <button className="Admin_button">Admin</button>
          </div>
          

          </div>    
         
      </div>
  )
}

export default header