import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./MovieTrend.module.css";
import thumbUp from "../../assets/thumbs-up.png";
import { actions } from "../../store/slice";

const MOVIE_BASE_URL = "https://movie.daum.net/";
const DISPLAY_COUNT = 10;

const MovieTrend = () => {
  const dispatch = useDispatch();
  const { movieList } = useSelector(state => state.trend);
  const { moviePage } = useSelector(state => state.trend);

  console.log(moviePage);

  const selectedMovie = movieList.filter(
    (_, index) => index >= (moviePage - 1) * DISPLAY_COUNT && index < moviePage * DISPLAY_COUNT,
  );

  const movieHTML = selectedMovie.map((movie, index) => (
    <div className={classes.movie_wrapper} key={movie.URL}>
      <div className={classes.poster}>
        <a href={`${MOVIE_BASE_URL}${movie.URL}`} target="_blank" rel="noopener noreferrer">
          <span>{index + 1}</span>
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

  const loadNextPage = () => {
    dispatch(actions.changeMoviePage(1));
  };

  const loadBackPage = () => {
    dispatch(actions.changeMoviePage(-1));
  };

  const showBackIcon = moviePage !== 1;
  const showNextIcon = moviePage !== movieList.length / DISPLAY_COUNT;

  return (
    <section>
      <div className={classes.movie__wrapper}>
        <p className="section__title">
          요즘 상영하는 영화와 <br />
          예매 순위를 알아보세요.
          <br />
        </p>
        <div className={classes.container}>{movieHTML}</div>
        {showBackIcon && (
          <button type="button" onClick={loadBackPage}>
            전
          </button>
        )}
        {showNextIcon && (
          <button type="button" onClick={loadNextPage}>
            후
          </button>
        )}
      </div>
    </section>
  );
};

export default MovieTrend;
