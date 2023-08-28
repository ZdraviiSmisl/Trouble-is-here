import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cart";
import productReducer from "../store/product";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
