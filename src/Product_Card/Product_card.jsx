import { useParams } from 'react-router-dom'
import './Product_card.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { IoStarSharp } from "react-icons/io5";
// import Header from '../../Header/Header'


import { AddToCart, viewFullDetailsOfProduct } from '../Slice/ProductSlice'
import Header from '../components/Header/Header';
const Product_card = () => {
    const [description, setDescription] = useState('')
    const { id, category } = useParams()
    const dispatch = useDispatch()
    

    const fulldetails = useSelector((state) => state.productInfo.productFullDetails)
    const reviews = fulldetails.reviews || [];
    const dimensions = fulldetails.dimensions || {};
    const tags = fulldetails.tags || [];
    const images = fulldetails.images || [];
   
    console.log(fulldetails)
    useEffect(() => {
        if (id && category) {
            dispatch(viewFullDetailsOfProduct({ id: Number(id), category }))
        }
    }, [category, dispatch, id])






    const handleDescription = (e) => {
        e.preventDefault()
        if (description) {
             setDescription(!fulldetails.description)
        } else {
             setDescription(fulldetails.description)
          }
       

    }

    const handleAddToCart = (CartProductDetails) => {
        dispatch(AddToCart(CartProductDetails))
    }

    return (
        <>
        <Header/>  
      <div className='Product_card_container'>
          <div className='fullDetails-subContainer'>
              {fulldetails ? (
                 
                <div className='detailContainer'>
                      

                      <div className='detail-image'>
                          <div className='images'>
                              <div className='extra-images'>
                                  {images.slice(0,4).map((img, index) => <div key={index}>
                                           <img src={img} alt="sample-image" />
                                  </div>)}
                              </div>
                              
                              <img src={fulldetails.thumbnail} alt={fulldetails.title} className='product-image' />
                           </div>
                          <div className='buy-AddCart'>
                              <button className='cart-button' onClick={()=>handleAddToCart(fulldetails)}><span className='cart-span'> <LuShoppingCart className="Addcart-icon" /></span>ADD TO CART</button>
                              <button className='buy-button'>BUY NOW</button>
                          </div>
                      </div>


                    
                      <div className='datail-otherDetailOfProduct'>
                                <p className='productDetail-title'>{fulldetails.title}</p>
                                <div className='rating-reviews'>
                                   <div className='productDetail-rating'>
                                       <p>{fulldetails.rating}</p>
                                       <IoStarSharp className='star' />
                                   </div >
                                   <p className='review-length'>{reviews.length} Ratings & 0 Reviews</p>
                                </div>
                          
                                <p className='special-price-heading'>Special Price</p>
                                <div className='price-discount'>
                                    <h2>₹ {fulldetails.price}</h2> 
                                    <p>{fulldetails.discountPercentage }%  Off</p>
                                </div>
                          
                                <div className='description'>
                                    <button type='button' onClick={handleDescription}>More Details</button>
                                     {description && <p>{description }</p>}
                                </div>
                          
                                <div className='Delivery-Details-Container'>
                                    <h3>Delivery Deatails :</h3>
                                    <div className='shiping-warenty'>
                                       <li>{fulldetails.shippingInformation}</li>
                                       <li>{fulldetails.warrantyInformation }</li>
                                    </div>
                                </div>

                                <div className='Dimention-details'>
                                   <h3>Dimentions:</h3>
                                   <div className='dimention-clear-details'>
                                       <p>Width:{dimensions.width}</p>
                                       <p>Height.{dimensions.height}</p>
                                       <p>Depth:{dimensions.depth}</p>
                                       <p>weight:{fulldetails.weight }</p>
                                   </div>
                                </div>
                          
                                <p className='stock'>Product-Stock in Now:<span>{ fulldetails.stock}</span></p>

                                <div className='product-tags'>
                                    <h3>Highlights:</h3>
                                    <div className='highlight'>
                                         {tags.map((highlight, index) => (<ul key={index}><li >{highlight}</li></ul>))}
                                    </div>
                                </div>
                         
                        </div>

                </div>
                  
              ) : ( 
                      <div className='nodata-tag'>
                          <h1>No data Found</h1>
                      </div>
                )}


              
              
          </div>  
            </div>
            </>
  )
}

export default Product_card