import { useEffect } from 'react'
import './RandomProducts.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory, getRandomProducts, viewFullDetailsOfProduct } from '../../Slice/ProductSlice'
import { useNavigate, useParams } from 'react-router-dom';

const RandomProducts = () => {
  const dispatch = useDispatch()
  const fetchedProduct = useSelector((state) => state.productInfo.randomProducts || [])
  const categories = useSelector((state) => state.productInfo.allCategories || [])
  const navigate = useNavigate()
  const param=useParams()

  
  useEffect(() => {
    dispatch(getRandomProducts())
   }, [dispatch,param])


 
  

  const categoryImages = categories.map(category => {
  const product = fetchedProduct.find(product => product.category === category);
     return {
            category,
            image: product ? product.thumbnail : null
           };
      });  

  const handleSelectedProduct = (category) => {
    dispatch(getCategory(category))
    navigate(`/${category}`);

  }

  const handleViewFullDetails = (id,category) => {
        console.log(id)
        dispatch(viewFullDetailsOfProduct({id,category}))
        navigate(`/${category}/${id}`)
        }
  

    
  return (
    <div className="Random-Products-Container">

      <div className='catagory-div'>
        {categoryImages.map((item, index) => (
          <div className='catagory-items' key={index}  onClick={()=>handleSelectedProduct(item.category)}>
            {item.image && <img src={item.image} alt={item.category} className='category-image' />}
            <p>{item.category }</p>
          </div>
        ))}

      </div>

      <div className='sub-div'>
         {fetchedProduct && fetchedProduct
           .filter((product) => product.category === 'smartphones' || product.category ==='mens-shirts')
           .slice(0, 5)
           .map((product, index) => (
            <div className='product-div' key={index}>
                  <div  className="product-Items"onClick={()=>handleViewFullDetails(product.id,product.category)}>
                    <div className='image-box'>
                       <img src={product.thumbnail} alt={product.title} className='product-image'/>
                    </div>
                    <h3 className='product-title'>{product.title}</h3>
                    <p className='product-price'>₹.{product.price}</p>
                    <p className='product-offer'>Min.{product.discountPercentage}% Off</p> 
                  </div>
            </div>
          ))}
      </div>
      

       <div className='sub-div'>
         {fetchedProduct && fetchedProduct
           .filter((product) => product.category === 'groceries' || product.category ==='kitchen-accessories')
           .slice(0, 5)
           .map((product, index) => (
            <div className='product-div' key={index}>
                  <div  className="product-Items" onClick={()=>handleViewFullDetails(product.id,product.category)}>
                      <div className='image-box'>
                        <img src={product.thumbnail} alt={product.title} className='product-image'/>
                      </div>
                      <h3 className='product-title'>{product.title}</h3>
                      <p className='product-price'>₹.{product.price}</p>
                      <p className='product-offer'>Min.{product.discountPercentage}% Off</p> 
                  </div>
            </div>
           ))}
      
      </div>
      

       <div className='sub-div'>
         {fetchedProduct && fetchedProduct
             .filter((product) => product.category === 'mens-watches' ||  product.category === 'womens-shirts')
             .slice(0, 5)
             .map((product, index) => (
            <div className='product-div' key={index}>
                <div  className="product-Items" onClick={()=>handleViewFullDetails(product.id,product.category)}>
                    <div className='image-box'>
                      <img src={product.thumbnail} alt={product.title} className='product-image'/>
                    </div>
                    <h3 className='product-title'>{product.title}</h3>
                    <p className='product-price'>₹.{product.price}</p>
                    <p className='product-offer'>Min.{product.discountPercentage}% Off</p> 
                 </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default RandomProducts



