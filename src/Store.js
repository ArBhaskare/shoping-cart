import { configureStore } from "@reduxjs/toolkit";
import StduentReducer from './StudentSlice'
import ProductReducer from './ProductSlice'
import CartReducer from './CartSlice'
 
const store = configureStore({
    reducer:{
        students : StduentReducer,
        products : ProductReducer,
        carts    : CartReducer
    }
})


export default store;