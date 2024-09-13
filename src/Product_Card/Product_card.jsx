import { useParams } from 'react-router-dom'
import './Product_card.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { viewFullDetailsOfProduct } from '../Slice/ProductSlice'
const Product_card = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const fulldetails = useSelector((state) => state.productInfo.productFullDetails)
    const[description,setDescription]=useState('')
    console.log(fulldetails)
    const{reviews,dimensions,tags}=fulldetails
    useEffect(() => {
        if (id) {
            dispatch(viewFullDetailsOfProduct(Number(id)))
        }
    }, [dispatch, id])

    const handleDescription = (e) => {
        e.preventDefault()
        if (description) {
             setDescription(!fulldetails.description)
        } else {
             setDescription(fulldetails.description)
          }
       

    }

  return (
      <div className='Product_card_container'>
          <div className='fullDetails-subContainer'>
              {fulldetails ? (
                 
                  <div  className='detailContainer'>
                      <div className='detail-image'>
                          <img src={fulldetails.thumbnail} alt={fulldetails.title} className='product-image' />
                          <div className='buy-AddCart'>
                              <button className='cart-button'>ADD TO CART</button>
                              <button className='buy-button'>BUY NOW</button>
                          </div>
                      </div>
                      <div className='datail-otherDetailOfProduct'>
                          <p>{fulldetails.title}</p>
                          <div className='rating-reviews'>
                              <p>{fulldetails.rating}</p>
                              <p>{reviews.length}</p>
                          </div>
                          <p>Special Price</p>
                          <div>
                              <h2>₹{fulldetails.price}</h2> 
                              <p>Discount-{fulldetails.discountPercentage }%</p>
                          </div>
                         
                          <div className='Delivery-Details-Container'>
                              <p>Delivery:  <span>{fulldetails.shippingInformation}</span></p>
                              <p>{fulldetails.warrantyInformation }</p>

                          </div>

                          <div className='Dimention-details'>
                              <p>Width:{dimensions.width}</p>
                              <p>Height.{dimensions.height}</p>
                              <p>Depth:{dimensions.depth}</p>
                              <p>weight:{fulldetails.weight }</p>
                          </div>
                          <p>Product-Stock in now:{ fulldetails.stock}</p>

                          <div className='product-tags'>
                              {tags.map((highlight, index) => (<p key={index}>{highlight}</p>))}
                          </div>
                          <button type='button' onClick={handleDescription}>MoreDetails</button>
                          {description && <p>{description }</p>}
                      </div>

                  </div>
              ) : ( 
                      <div>
                          nodata..
                      </div>
              )}


              
              
          </div>  
      </div>
  )
}

export default Product_card