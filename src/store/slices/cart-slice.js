// createslice
// initialize initial state
// slice -> name, mention initial state, actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSLice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addedToCart(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addedToCart, removeFromCart } = cartSLice.actions;

export default cartSLice.reducer;
