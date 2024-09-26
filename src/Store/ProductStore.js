import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Slice/ProductSlice'
// const isDevelopment = import.meta.env.VITE_ENV === 'development';


const store = configureStore({
    reducer: {
        productInfo:productReducer,
    },
    //  middleware: (getDefaultMiddleware) => 
    // getDefaultMiddleware({
    //   serializableCheck: isDevelopment ? false : true, // Disable in dev mode
    // }),
})

export default store;