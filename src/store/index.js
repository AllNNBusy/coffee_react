import { configureStore } from "@reduxjs/toolkit";
import product from '../components/appOurCoffee/productSlice';

const store = configureStore({
    reducer: {product},
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;