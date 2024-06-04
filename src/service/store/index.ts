import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../feature/Cart/CartSlice"

export const store = configureStore({
  reducer: {
    cart: cardReducer
  }
})