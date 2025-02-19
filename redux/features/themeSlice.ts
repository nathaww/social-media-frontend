import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || "light";
  }
  return "light";
};

interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", state.theme);
      }
      document.documentElement.classList.toggle("dark", state.theme === "dark");
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", state.theme);
      }
      document.documentElement.classList.toggle("dark", state.theme === "dark");
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
