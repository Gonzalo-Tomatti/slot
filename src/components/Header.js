import React from "react";
import logo from "../images/web-dev-slot-logo.png";
import { useGlobal } from "../context";

const Header = () => {
  const { isSpinning } = useGlobal();
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1 className={`${isSpinning && "title-light"} title`}>Web-Dev Slot!</h1>
    </header>
  );
};

export default Header;
