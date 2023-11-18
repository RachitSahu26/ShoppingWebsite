
import { createSlice } from "@reduxjs/toolkit";

const initialState =JSON.parse(localStorage.getItem('cart')) ?? [];

const CartSlice = createSlice({
  name: "cart",
  initialState, // Fix the typo here
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeToCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeToCart } = CartSlice.actions;
export default CartSlice.reducer;
