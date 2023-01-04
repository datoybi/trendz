import React from "react";
import { useSelector } from "react-redux";
import classes from "./MovieTrend.module.css";
import thumbUp from "../assets/thumbs-up.png";

const MovieTrend = () => {
  return (
    <section>
      <p className={classes.section__title}>영화 Trendz - 요즘 상영하는 영화</p>
      <div className={classes.container}>
        <div className={classes.movie_wrapper}>
          <div className={classes.poster}>
            <img
              alt="아바타 포스터"
              src="https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0cdb0abb3d8da8c6332bf6a945a86f9a32f67abd"
            />
          </div>
          <div className={classes.rate_wrap}>
            <span>
              <img alt="평점" src={thumbUp} />
            </span>
            <span className={classes.rate}>7.8</span>
          </div>
          <p className={classes.movie_name}>아바타: 물의 길</p>
        </div>
      </div>
    </section>
  );
};

export default MovieTrend;
