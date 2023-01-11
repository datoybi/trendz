import React from "react";
import PropTypes from "prop-types";
import classes from "./MovieElement.module.css";
import thumbUp from "../../assets/thumbs-up.png";
import { MOVIE_BASE_URL } from "../../constants/url";

const MovieElement = ({ movie }) => {
  return (
    <div className={classes.movie}>
      <a href={`${MOVIE_BASE_URL}${movie.URL}`} target="_blank" rel="noopener noreferrer">
        <div className={classes["movie-poster"]}>
          <span className={classes["movie-poster__ranking"]}>{movie.ranking}</span>
          <img className={classes["movie-poster__image"]} alt={movie.title} src={movie.posterURL} />
        </div>
        <div className={classes["movie-ranking"]}>
          <img className={classes["movie-rating__image"]} alt="평점" src={thumbUp} />
          <span className={classes["movie-rating__text"]}>{movie.rate}</span>
        </div>
        <span className={classes["movie-title"]}>{movie.title}</span>
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
