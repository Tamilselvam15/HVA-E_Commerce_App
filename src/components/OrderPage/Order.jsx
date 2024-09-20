import { useSelector } from 'react-redux';
import './Order.css'
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Header from '../Header/Header'

const Order = () => {
    const [orderedItems, setOrderedItems] = useState([])
    const orderedProducts = useSelector((state) => state.productInfo.ordersummary)
    
    

    useEffect(() => {
        if (orderedProducts) {
          setOrderedItems(orderedProducts)
      } 
    },[orderedProducts])
    return (
      <>
            <Header/>
      <div className='OrderDetail-container'>
          <div className='leftside-container'>
              <div className='filter-card'>
                  <h3>Filters</h3>
              </div>
          </div>
          <div className='rightside-container'>
              <div className='order-search'>
                  <input type="text"  placeholder='Search Your orders here '/>
                  <button><span><FaSearch className="Ordersearch-icon" /></span><span> Search Orders</span></button>
              </div>
              {orderedItems.length > 0 ? (
                  <div className='order-divo'>
                      {orderedItems.map((product, index) => (
                          <div key={index} className='order-div'>
                              
                                 <div className='renderOrderItems_leftside_div'>
                                     <img src={product.thumbnail} alt={product.title} />
                                 </div>
                              
                                 <div className='renderOrderItems_rightside_div'>
                                    <h3>{product.title}</h3>
                                    <h4>{product.discountPercentage} % Offer</h4>
                                    <div className='orderproduct-description'>
                                        <p>{product.description}</p>
                                    </div>
                                  <p>{product.shippingInformation}</p>
                                  <p className='finalinfo'>Succesfully Ordered!!..</p>
                                </div>
                              
                          </div>
                      ))}
                  </div>

              ) : (
                      
                  <div>
                      No orders
                  </div>
                      
              )}


          </div>
          
            </div>
            </>
  )
}

export default Order