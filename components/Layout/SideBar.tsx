"use client"
import React from "react";
import { BsActivity } from "react-icons/bs";
import { FaBookmark, FaHome, FaRegBookmark } from "react-icons/fa";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import SideBarButton from "../UI/SideBarButton";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Profile from "../UI/Profile";
import Logout from "../UI/Logout";

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
      className={`w-1/5 fixed h-screen flex flex-col justify-between bg-secondaryLight dark:bg-primaryDark will-change-transform transition-all px-1 pb-1 pt-4 origin-left ${
        isOpen ? "" : "translate-x-0 scale-x-0"
      }`}
    >
      {/* profile */}
      <Profile/>
      {/* profile */}
      
      {/* nav */}
      <div>
      {nav.map((item) => (
        <SideBarButton key={item.path} {...item} />
      ))}
      </div>
      {/* nav */}

      {/* logout */}
      <Logout/>
      {/* logout */}
    </aside>
  );
};

export default SideBar;
