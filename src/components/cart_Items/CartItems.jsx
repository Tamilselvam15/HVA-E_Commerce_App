import { useEffect, useState } from 'react'
import './cartItems.css'
import { GiCheckedShield } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux'
import { RemoveItemFromTheCart } from '../../Slice/ProductSlice';
const CartItems = () => {
    const dispatch=useDispatch()
    const CartItems = useSelector((state) => state.productInfo.cart)
    const [toRenderCartItems, setToRenderCartItems] = useState([])
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [buy, setBuy] = useState(0)
    const [allAmount, setAllAmount] = useState(0)
    const[save,setSave]=useState(0)
    
    useEffect(() => {
        let Total = toRenderCartItems.reduce((acc, product) => acc + product.price, 0);
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
    
    useEffect(() => {
        if ( CartItems.length >= 0) {
            setToRenderCartItems(CartItems)
        }
    }, [CartItems])
    
    const handleRemove = (id) => {
        dispatch(RemoveItemFromTheCart(id))
    }

  return (
      <div className="cart-container">
          
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
                                        <p>{cartProduct.stock} Only</p>
                                    </div>
                                    <p>{ cartProduct.shippingInformation}</p>
                                     <div className='save-remove'>
                                         <button className='save-Button'>Save For Later</button>
                                         <button className='remove-Button' onClick={()=>handleRemove(cartProduct.id)}>Remove Item</button>
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
                      <button className='place-order-Button'>PLACE ORDER</button>
                  </div>
              </div>
              



           <div className='right-sideOfCartPage'>
                   <div className='summary-amountof_product'>
                       <h3>PRICE DETAILS</h3>
                       <p className='order-pricedetails addspan'><span>Price({toRenderCartItems.length - 1 + 1} items)</span> <span className='pricing'>{price}</span></p>
                       <p className='order-pricedetails addspan'><span>Discount</span><span className='offer'>-{discount.toFixed(2)}</span></p>
                       <p className='order-pricedetails addspan'><span>Buy more & save more</span><span className='buy'>-{buy.toFixed(2) }</span></p>
                       <p className='order-pricedetails addspan'><span>Coupons for you</span> <span className='coupens'>-</span></p>
                       <p className='order-pricedetails addspan'><span>Delivery Charges</span> <span className='free'>Free</span></p>
                       <p>-------------------------------------------------------------------------</p>
                       <h2><span>Total Amount</span> <span className='allAmount'>{ allAmount.toFixed(2)}</span></h2>
                       <p>-------------------------------------------------------------------------</p>
                       <h4>You will save ₹{save.toFixed(2)} on this order</h4>
                     </div>
              
              <div className='Assurance'>
                  <GiCheckedShield  className='sheild-icon'/>
                  <p>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
              </div>
            </div>
            
          

          
          
      </div>
  )
}

export default CartItems