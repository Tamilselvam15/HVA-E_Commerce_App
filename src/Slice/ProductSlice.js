import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    allCategories: [],
    randomProducts: [],
    viewCategory: [],
    cart:[],
    productFullDetails:null,
    status: 'idle',
    error:null
}

export const getRandomProducts = createAsyncThunk(
      'product/getRandomProducts', 
       async () => {
          try {
              const response = await axios.get('/api/products?limit=190&skip=10')
              return response.data.products.sort(() => Math.random() - 0.5);
          } catch (error) {
              console.log(`Error:${error}`)
          }
    }
)
    

const productSlice = createSlice({
    name: 'productdata',
    initialState,
    reducers: {
        getCategory: (state, action) => {
            state.viewCategory = state.randomProducts.filter((product) => product.category === action.payload)
        },
        viewFullDetailsOfProduct: (state, action) => {
            const { id, category } = action.payload
            state.productFullDetails = state.randomProducts.find((product) => product.id ===id && product.category === category)
        },
        AddToCart: (state, action) => {
            const productExists = state.cart.find(item => item.id === action.payload.id);
            if (!productExists) {
                state.cart = [...state.cart, action.payload];
            }
        },
    },
       extraReducers: (builder)=>{
        builder
            
             // Handle getRandomProducts lifecycle
            .addCase(getRandomProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getRandomProducts.fulfilled,(state,action)=> {
                state.status = 'succeeded';
                state.randomProducts = action.payload;
                state.allCategories = [...new Set(action.payload.map(product => product.category))];

            })
            .addCase(getRandomProducts.rejected, (state,action) => {
                state.status = 'failed';
                state.error = action.error.message;
           })
        
}
})

export const {getCategory,viewFullDetailsOfProduct,AddToCart} = productSlice.actions;
export default productSlice.reducer;