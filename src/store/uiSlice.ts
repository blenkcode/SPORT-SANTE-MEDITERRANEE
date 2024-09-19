import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  navbar: boolean;
}

const initialState: UiState = {
  navbar: false, // Initialement, le menu est fermé
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.navbar = true;
    },
    closeMenu: (state) => {
      state.navbar = false;
    },
    toggleMenu: (state) => {
      state.navbar = !state.navbar;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
