import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getCategory, getRandomProducts, viewFullDetailsOfProduct } from "../../Slice/ProductSlice"
import './selectedCategory.css'
const SelectedCategory = () => {
    const[selectedCategory,setSelectedCategory]=useState([])
    const { category } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const param=useParams()

    const selectedCategoryItems = useSelector((state) => state.productInfo.viewCategory)
    
       useEffect(() => {
           const fetchRandomProducts = async () => {
               const result = await dispatch(getRandomProducts());
               if (getRandomProducts.fulfilled.match(result)) {
                   dispatch(getCategory(category));
               }
           };
           fetchRandomProducts();
       }, [category, dispatch, param]);

    
    
       useEffect(() => {
        if (selectedCategoryItems && selectedCategoryItems.length > 0) {
            setSelectedCategory(selectedCategoryItems);
        }
    }, [selectedCategoryItems]);
  
  
     
  const handleViewFullDetails = (id,category) => {
        console.log(id)
        dispatch(viewFullDetailsOfProduct({id,category}))
        navigate(`/${category}/${id}`)
        }
    
    
    return (
      <div className="specific-category-container">
          <div className="sub-container">
               {selectedCategory && selectedCategory.map((product, index) => (
                   <div className='category-div' key={index}>
                            <div  className="category-Items" onClick={()=>handleViewFullDetails(product.id,product.category)}>
                                    <div className='category-image-box'>
                                        <img src={product.thumbnail} alt={product.title} className='product-image'/>
                                    </div>
                            
                                    <h3 className='category-title'>{product.title}</h3>
                                    <p className='category-price'>₹.{product.price}</p>
                                    <p className='category-offer'>Min.{product.discountPercentage}% Off</p> 
                            
                            </div>
                    
                    </div>
                
                ))}
          </div>
     </div>
    )
    }

export default SelectedCategory