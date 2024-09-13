import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Slice/ProductSlice'

const store = configureStore({
    reducer: {
        productInfo:productReducer,
    },
})

export default store;