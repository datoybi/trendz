import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <h1 className={classes.home__text}>요즘 뜨는 Trend를 알아보세요.</h1>
      <h2 className={classes.home__text}>아래의 분야를 선택해보세요.</h2>
    </div>
  );
};

export default Home;
