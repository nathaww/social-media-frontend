import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sideBarSlice";
import themeReducer from "./features/themeSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
