import { createSlice, nanoid } from "@reduxjs/toolkit";

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
        id: nanoid(),
        title: action.payload.title,
        count: 1,
      };
      state.carts.push(cart);
    },
    removeCart: (state, action) => {
      state.carts.filter((item) => item.id === action.payload);
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
