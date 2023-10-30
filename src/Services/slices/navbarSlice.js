import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMainMenu: false,
};

export const navbarSlice = createSlice({
  name: "navbarSlice",

  initialState,

  reducers: {
    toggleMainMenu: (state, action) => {
      state.showMainMenu = !state.showMainMenu;
    },
  },
});

export const { toggleMainMenu } = navbarSlice.actions;
