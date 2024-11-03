// createslice
// initialize initial state
// slice -> name, mention initial state, actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSLice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSLice.reducer;
