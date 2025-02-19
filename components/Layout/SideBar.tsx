"use client"
import React from "react";
import { BsActivity } from "react-icons/bs";
import { FaBookmark, FaHome, FaRegBookmark } from "react-icons/fa";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import SideBarButton from "../UI/SideBarButton";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const nav = [
  {
    name: "Home",
    path: "/",
    activeIcon: <FaHome />,
    icon: <FaHome />,
  },
  {
    name: "Activity",
    path: "/activity",
    activeIcon: <FaHome />,
    icon: <BsActivity />,
  },
  {
    name: "Saved",
    path: "/saved",
    activeIcon: <FaBookmark />,
    icon: <FaRegBookmark />,
  },
  {
    name: "Settings",
    path: "/settings",
    activeIcon: <IoSettingsSharp />,
    icon: <IoSettingsOutline />,
  },
];

const SideBar = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  return (
    <aside
      className={`w-1/4 fixed h-screen bg-secondaryLight dark:bg-primaryDark will-change-transform transition-all origin-left py-2 ${
        isOpen ? "" : "translate-x-0 scale-x-0"
      }`}
    >
      {/* profile */}

      {/* profile */}

      {/* nav */}
      {nav.map((item) => (
        <SideBarButton key={item.path} {...item} />
      ))}
      {/* nav */}

      {/* logout */}
      {/* logout */}
    </aside>
  );
};

export default SideBar;
