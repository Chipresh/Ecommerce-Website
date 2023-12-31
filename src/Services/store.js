import { configureStore } from "@reduxjs/toolkit";
import { navbarSlice } from "./slices/navbarSlice";

export const store = configureStore({
  reducer: {
    navbarSlice: navbarSlice.reducer,
  },
});
