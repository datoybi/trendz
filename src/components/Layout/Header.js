import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <a className={classes.logo} href="#">
        <img src={logo} alt="trendz" />
      </a>
      <nav>
        <a href="#">사회</a>
        <a href="#">엔터</a>
        <a href="#">문화</a>
      </nav>
    </header>
  );
};

export default Header;
