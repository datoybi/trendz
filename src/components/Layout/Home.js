/* eslint-disable react/prop-types */
import React from "react";
import classes from "./Home.module.css";
import Nav from "./Nav";

const Home = ({ handleSocialClick, handleCultureClick, handleEnterClick }) => {
  return (
    <section className={classes.home_section}>
      <div className={classes.home_wrap}>
        <h1>요즘 Trend를 알아보세요.</h1>
        {/* <h2>아래의 분야를 선택해보세요.</h2> */}
      </div>
      <Nav
        handleSocialClick={handleSocialClick}
        handleCultureClick={handleCultureClick}
        handleEnterClick={handleEnterClick}
      />
    </section>
  );
};

export default Home;
