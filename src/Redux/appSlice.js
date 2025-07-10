// src/redux/appSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  user: "Guest",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { increment, decrement, login } = appSlice.actions;
export default appSlice.reducer;
