import { useEffect, useState } from 'react'
import './cartItems.css'
import { GiCheckedShield } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux'
import { OrederStore, RemoveItemFromTheCart } from '../../Slice/ProductSlice';
import { useNavigate } from 'react-router-dom';
import { MdOutlinePlaylistRemove } from "react-icons/md";

import Header from '../Header/Header'

const CartItems = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const CartItems = useSelector((state) => state.productInfo.cart)
    const [toRenderCartItems, setToRenderCartItems] = useState([])
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [buy, setBuy] = useState(0)
    const [allAmount, setAllAmount] = useState(0)
    const [save, setSave] = useState(0)
    const [noItems, setNoItems] = useState(false)
    
    useEffect(() => {
        let Total = toRenderCartItems.reduce((acc, product) => acc + product.quantity*product.price, 0);
        let Discount = 10 / 100 * Total
        let buymore = 2 / 100 * discount
        let TotalOfAllTheAmount = Total - (discount + buymore)
        let savedCost=Discount+buymore
        setPrice(Total)
        setDiscount(Discount)
        setBuy(buymore)
        setAllAmount(TotalOfAllTheAmount)
        setSave(savedCost)
    }, [discount, toRenderCartItems])

    //New Key and Values Are added..in the useEffect
    
    useEffect(() => {
        if (CartItems.length >= 0) {
            const updatedcartItems = CartItems.map((item) => ({
                ...item,
                quantity:1
            }))
            setToRenderCartItems(updatedcartItems)
        }
    }, [CartItems])
    
    const handleRemove = (id) => {
        dispatch(RemoveItemFromTheCart(id))
    }

    const handleOrder = (id) => {
        if (toRenderCartItems.length > 0) {
           dispatch(OrederStore(id))
           navigate('/cartItems/Order')
        }else{
           setNoItems(true)
        }
    }

    const handleUpdateQuantity = (index,value) => {
        const updatedItems = [...toRenderCartItems]
        updatedItems[index].quantity = value
        setToRenderCartItems(updatedItems)
    }

    return (
      <>
            <Header/>
      <div className="cart-container">
                {noItems === true &&
                    <div className='error-model'>
                        <h2>No Items in this cart List..</h2>
                        <MdOutlinePlaylistRemove className='empty-icon' /> 
                        <p>Please add Your product To the Cart</p>
                        <button onClick={() => setNoItems(false)}>ok</button>
                    </div>}
                <div className='left-sideOfCartPage'>
                   <div className='countOfCartItems'>
                       <p>HVA Shopping ({toRenderCartItems.length-1+1})</p>
              </div>
              {toRenderCartItems.length > 0 ? (
                 <div className='EachCart-Items'>
                        {toRenderCartItems.map((cartProduct,index) => (
                             <div className='item-display' key={index}>
                                 <div className='Item-Left1'>
                                     <img src={cartProduct.thumbnail} alt={cartProduct.title} />
                                 </div>
                                 <div className='Item-Left2'>
                                    <h3>{cartProduct.title}</h3>
                                    <h4>{ cartProduct.discountPercentage} % Offer</h4>
                                    <div className='stockDetailsofCart-Items'>
                                        <p>{cartProduct.availabilityStatus}</p>
                                        {/* <p>{cartProduct.stock} Only</p> */}
                                    </div>
                                    <p>{ cartProduct.shippingInformation}</p>
                                     <div className='save-remove'>
                                         <button className='save-Button'>Save For Later</button>
                                        <button className='remove-Button' onClick={() => handleRemove(cartProduct.id)}>Remove Item</button>
                                        <div className='quantity-div'>
                                            <input type="number" className='quantity-input' placeholder='1' min="1" max="5" onChange={(e) => handleUpdateQuantity(index,e.target.value)} />
                                            <span>Quantity</span>
                                        </div>
                                     </div>
                                 </div>
                             </div>
                         ))}
                    </div>
              ) : (
                      <div className='Nodata'>
                          <h1>No Items Added....</h1>
                      </div>
              )}
             
                   
                  
                  <div className='cart-left-footer'>
                      <button className='place-order-Button' onClick={()=>handleOrder(toRenderCartItems)}>PLACE ORDER</button>
                  </div>
              </div>
              



           <div className='right-sideOfCartPage'>
                   <div className='summary-amountof_product'>
                       <h3>PRICE DETAILS</h3>
                       <p className='order-pricedetails addspan'><span>Price({toRenderCartItems.length - 1 + 1} items)</span> <span className='pricing'>{price.toFixed(2)}</span></p>
                       <p className='order-pricedetails addspan'><span>Discount</span><span className='offer'>- {discount.toFixed(2)}</span></p>
                       <p className='order-pricedetails addspan'><span>Buy more & save more</span><span className='buy'>- {buy.toFixed(2) }</span></p>
                       <p className='order-pricedetails addspan'><span>Coupons for you</span> <span className='coupens'>- </span></p>
                       <p className='order-pricedetails addspan'><span>Delivery Charges</span> <span className='free'>Free</span></p>
                       <p className='line'>-------------------------------------------------------------------------</p>
                       <h2><span>Total Amount</span> <span className='allAmount'>{ allAmount.toFixed(2)}</span></h2>
                       <p className='line'>-------------------------------------------------------------------------</p>
                       <h4>You will save ₹{save.toFixed(2)} on this order</h4>
                     </div>
              
              <div className='Assurance'>
                  <GiCheckedShield  className='sheild-icon'/>
                  <p>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
              </div>
            </div>
            
          

          
          
            </div>
            </>
  )
}

export default CartItems