"use client";
import { toggleSidebar } from "@/redux/features/sideBarSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { LuPanelLeftClose } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

const ShowSideBarButton = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(toggleSidebar())}
      className="text-secondaryDark dark:text-white text-2xl transition-all"
    >
      {isOpen ? (
        <LuPanelLeftClose />
      ) : (
        <LuPanelLeftClose className="rotate-180" />
      )}
    </button>
  );
};

export default ShowSideBarButton;
