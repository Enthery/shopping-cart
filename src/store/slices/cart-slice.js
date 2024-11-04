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
  },
});

export const { addedToCart } = cartSLice.actions;

export default cartSLice.reducer;
