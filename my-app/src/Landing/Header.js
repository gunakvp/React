import React from "react";
import Button from "./Button";
import Logo from "../assets/image/logo.png";




const Header = () => {
  return (
    <header>
      <div className="logo">
        <img alt="logo" src={Logo} />
      </div>
      <nav>
        <div>
          <Button classname="btn-blue"  title="Sign In" />
          <Button classname="btn-gray"  title="Register" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
