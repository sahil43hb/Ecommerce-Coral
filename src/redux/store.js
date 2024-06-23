import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/feature/counterSlice";
import productReducer from "../redux/feature/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
  },
});
