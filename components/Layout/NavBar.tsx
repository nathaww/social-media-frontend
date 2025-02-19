import React from "react";
import ThemeButton from "../UI/ThemeButton";
import ShowSideBarButton from "../UI/ShowSideBarButton";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-2 text-primaryDark dark:text-primaryLight">
      <ShowSideBarButton/>
      <p className="text-2xl font-bold">Knitworks</p>
      <ThemeButton />
    </nav>
  );
};

export default NavBar;
