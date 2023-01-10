/* eslint-disable react/prop-types */
import React from "react";
import classes from "./Home.module.css";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className={classes.home_wrap}>
      <h1>요즘 Trend를 알아보세요.</h1>
      {/* <h2>아래의 분야를 선택해보세요.</h2> */}
    </div>
  );
};

export default Home;
