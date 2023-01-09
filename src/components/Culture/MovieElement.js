import React from "react";
import PropTypes from "prop-types";
import classes from "./MovieElement.module.css";
import thumbUp from "../../assets/thumbs-up.png";

const MOVIE_BASE_URL = "https://movie.daum.net/";

const MovieElement = ({ movie }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.poster}>
        <a href={`${MOVIE_BASE_URL}${movie.URL}`} target="_blank" rel="noopener noreferrer">
          <span>{movie.ranking}</span>
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
  );
};

MovieElement.propTypes = {
  movie: PropTypes.exact({
    posterURL: PropTypes.string,
    URL: PropTypes.string,
    title: PropTypes.string,
    rate: PropTypes.string,
    ranking: PropTypes.number,
  }).isRequired,
};

export default MovieElement;
