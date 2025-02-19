"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleTheme, setTheme } from "@/redux/features/themeSlice";

const ThemeButton = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    }
  }, [dispatch]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-full bg-secondaryLight dark:bg-primaryDark transition-all active:scale-95"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeButton;
