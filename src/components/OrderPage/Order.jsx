import { useSelector } from 'react-redux';
import './Order.css'
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Header from '../Header/Header'
import { VscListOrdered } from "react-icons/vsc";
import { SiTicktick } from "react-icons/si";

const Order = () => {
    const [colection, setCollection] = useState([])
    const[viewlist,setViewList]=useState(false)
    const [orderedItems, setOrderedItems] = useState([])
    const orderedProducts = useSelector((state) => state.productInfo.ordersummary)
    // const Amount = useSelector((state) => state.productInfo.TotalAmount)

    console.log(orderedProducts)
    
    
    

    useEffect(() => {
        if (orderedProducts) {
          setOrderedItems(orderedProducts)
      } 
    }, [orderedProducts])
    
    const handleviewOrderdproduct = (collectionOfProductItem) => {
        setCollection(collectionOfProductItem)
        setViewList(true)
    }
    return (
      <>
        <Header/>
        <div className='OrderDetail-container'>
            <div className='leftside-container'>
                <div className='filter-card'>
                        <h3>Filters</h3>
                         <div className='Order-status'>
                            <h4>Order Status</h4>
                            <div className='check-box'>
                              <input type="checkbox" />
                              <label >On the Way</label>
                            </div>

                            <div className='check-box'>
                             <input type="checkbox" />
                             <label >Deliverded</label>
                            </div>

                            <div className='check-box'>
                              <input type="checkbox" />
                              <label >Returned</label>
                            </div>

                            <div className='check-box'>
                              <input type="checkbox" />
                              <label >Cancelled</label>
                            </div>

                         <div className='Order-status'>
                            <h4>Order Time</h4>
                            <div className='check-box'>
                              <input type="checkbox" />
                              <label >Last 30 Days</label>
                            </div>

                            <div className='check-box'>
                             <input type="checkbox" />
                             <label >2024</label>
                            </div>

                            <div className='check-box'>
                              <input type="checkbox" />
                              <label >2023</label>
                            </div>

                            <div className='check-box'>
                              <input type="checkbox" />
                              <label >2022</label>
                            </div>
                                
                            <div className='check-box'>
                              <input type="checkbox" />
                              <label >Older</label>
                            </div>
                         
                    </div>
                         
                    </div>
                    </div>
                   
            </div>
                
            <div className='rightside-container'>
                <div className='order-search'>
                  <input type="text"  placeholder='Search Your orders here '/>
                  <button><span><FaSearch className="Ordersearch-icon" /></span><span> Search Orders</span></button>
                </div>
                    
                {
                  viewlist === true ?
                   <div className='back-button' >
                     <button onClick={() => setViewList(false)} className='BackCollection'>Back To Orders</button>
                   </div> : ''
                }     
                    
                {orderedItems.length > 0 ? (
                        <div className='order-divo'>
                            {viewlist === true ? (
                                colection.map((product, index) => (
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
                                ))


                            ) : (
                                    
                            orderedItems.map((collectionOfProductItem,index) => (
                                <div key={index} className='collectionDiv' >
                                    <div className='leftOfOrder-div'>
                                         <VscListOrdered className='listImage'/>
                                    </div>
                                    <div className='rightOfOrder-div'>
                                        <p className='first'>Order:  {index  + 1}</p>
                                        <p >Total Items Added:{collectionOfProductItem.length}</p>
                                        {/* <p> { Amount.find((item,index)=>item[index]===collectionOfProductItem[index])}</p> */}
                                        <p className='second'>You Have Successfully Ordered!!!..    <SiTicktick className='tick-icon'/></p>
                                    </div>
                                    <div className='view-div'>
                                        <button onClick={()=>handleviewOrderdproduct(collectionOfProductItem)}>viewDetails</button>
                                    </div>
                                </div>
                            )))}
                         
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