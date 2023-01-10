/* eslint-disable no-shadow */
import React, { useRef, useState, forwardRef } from "react";
import { useSelector } from "react-redux";
import classes from "./MovieTrend.module.css";
import nextIcon from "../../assets/next_icon.png";
import prevIcon from "../../assets/prev_icon.png";
import MovieElement from "./MovieElement";

const DISPLAY_COUNT = 10;

const MovieTrend = forwardRef((_, movieRef) => {
  const items = useRef();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { movieList } = useSelector(state => state.trend);

  const firstMovieHtml = movieList.filter((_, index) => index < DISPLAY_COUNT);
  const secondMovieHtml = movieList.filter((_, index) => index >= DISPLAY_COUNT);

  const movieHTML = (
    <div className={classes.movieItems} ref={items}>
      <div className={classes.movieItem}>
        <div className={classes.firstIem}>
          {firstMovieHtml.map(movie => (
            <MovieElement key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
      <div className={classes.movieItem}>
        <div className={classes.secondIem}>
          {secondMovieHtml.map(movie => (
            <MovieElement key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );

  const toggleOnClick = newIndex => {
    items.current.style.transform = `translate3d(-${980 * newIndex}px, 0, 0)`;
    setCarouselIndex(newIndex);
  };

  return (
    <section ref={movieRef}>
      <div className={classes.movie__wrapper}>
        <p className="section__title">
          요즘 상영하는 영화와 <br />
          예매 순위를 알아보세요.
          <br />
        </p>
        <div>
          <div className={classes.carouselView}>{movieHTML}</div>
        </div>
        {carouselIndex === 0 && (
          <button
            type="button"
            className={`${classes.movieButtons} ${classes.nextButton}`}
            onClick={() => toggleOnClick(1)}
          >
            <img src={nextIcon} alt="다음영화 순위보기" />
          </button>
        )}
        {carouselIndex === 1 && (
          <button
            type="button"
            className={`${classes.movieButtons} ${classes.prevButton}`}
            onClick={() => toggleOnClick(0)}
          >
            <img src={prevIcon} alt="이전영화 순위보기" />
          </button>
        )}
      </div>
    </section>
  );
});

export default MovieTrend;
