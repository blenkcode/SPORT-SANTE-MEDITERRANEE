import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "./uiSlice"; // Import du reducer UI

export const store = configureStore({
  reducer: {
    ui: uiReducer, // Ajouter le reducer UI ici
  },
});

// Types pour RootState et AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
