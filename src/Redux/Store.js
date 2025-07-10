import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice.js";
import uiReducer from "./uiSlice.js";
const store = configureStore({
  reducer: {
    app: appReducer,
    ui: uiReducer,
  },
});

export default store;
