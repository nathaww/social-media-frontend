"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <div
      className={`w-full bg-white dark:bg-secondaryDark transition-all ${
        isOpen ? "ml-[25%]" : "ml-0"
      }`}
    >
      {children}
    </div>
  );
}
