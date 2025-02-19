import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sideBarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
