import React from "react";
import Button from "./Button";
import { LuLogOut } from "react-icons/lu";

const Logout = () => {
  return (
    <Button onClick={()=>{}} text="Logout" icon={<LuLogOut/>} iconPosition="right"/>
  );
};

export default Logout;
