import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ProductDataType } from "../../../components/pages/Homepage/type";

type cartType = {
  id: string;
  title: string;
  count: number;
};

const initialState: { carts: cartType[] } = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cart = {
        id: action.payload.id,
        title: action.payload.title,
        count: 1,
      };
      state.carts.push(cart);
    },
    removeCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
    incrementProduct: (state, action) => {
      const currentIndex = state.carts.findIndex(
        (item) => item.id === action.payload
      );
      state.carts[currentIndex].count = state.carts[currentIndex].count + 1;
    },
    decrementProduct: (state, action) => {
      const currentIndex = state.carts.findIndex(
        (item) => item.id === action.payload
      );
      state.carts[currentIndex].count = state.carts[currentIndex].count - 1;
    },
  },
});

export const selectCartCountById = createSelector(
  state => state.cart,
  (_, id) => id,
  (cart, id) => cart.carts.find((item: ProductDataType) => item.id === id)?.count || 0
);

export const { addToCart, removeCart, incrementProduct, decrementProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
