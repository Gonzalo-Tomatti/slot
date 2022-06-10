import React from "react";
import logo from "../images/web-dev-slot-logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1 className="title">Web-Dev Slot!</h1>
    </header>
  );
};

export default Header;
