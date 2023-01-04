import React from "react";
import { useSelector } from "react-redux";
import classes from "./MovieTrend.module.css";
import thumbUp from "../assets/thumbs-up.png";

const MOVIE_BASE_URL = "https://movie.daum.net/";

const MovieTrend = () => {
  const { movieList } = useSelector(state => state.trend);

  const movieHTML = movieList.map(movie => (
    <div className={classes.movie_wrapper}>
      <div className={classes.poster}>
        <a href={`${MOVIE_BASE_URL}${movie.URL}`} target="_blank" rel="noopener noreferrer">
          <img alt={movie.title} src={movie.posterURL} />
        </a>
      </div>
      <div className={classes.rate_wrap}>
        <a href={`${MOVIE_BASE_URL}${movie.URL}`} target="_blank" rel="noopener noreferrer">
          <img alt="평점" src={thumbUp} />
          <span className={classes.rate}>{movie.rate}</span>
        </a>
      </div>
      <a
        href={`${MOVIE_BASE_URL}${movie.URL}`}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.movie_name}
      >
        {movie.title}
      </a>
    </div>
  ));

  return (
    <section>
      <p className={classes.section__title}>영화 Trendz - 요즘 상영하는 영화</p>
      <div className={classes.container}>{movieHTML}</div>
    </section>
  );
};

export default MovieTrend;
