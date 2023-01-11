import React, { useRef, useState, forwardRef } from "react";
import { useSelector } from "react-redux";
import classes from "./MovieTrend.module.css";
import carouselNextIcon from "../../assets/next_icon.png";
import carouselPrevIcon from "../../assets/prev_icon.png";
import MovieElement from "./MovieElement";

const DISPLAY_COUNT = 10;

const MovieTrend = forwardRef((_, movieRef) => {
  const items = useRef();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { movieList } = useSelector(state => state.trend);

  const firstMovieList = movieList.filter((_, index) => index < DISPLAY_COUNT);
  const secondMovieList = movieList.filter((_, index) => index >= DISPLAY_COUNT);

  const movieHTML = (
    <div className={classes["carousel-section"]} ref={items}>
      <div>
        <div className={classes["carousel-section--order-first"]}>
          {firstMovieList.map(movie => (
            <MovieElement key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
      <div>
        <div className={classes["carousel-section--order-second"]}>
          {secondMovieList.map(movie => (
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
    <section className={classes.section} ref={movieRef}>
      <div className={classes.section__inner}>
        <h1 className="section__title">
          요즘 상영하는 영화와 <br />
          예매 순위를 알아보세요.
        </h1>
        <div className={classes.carousel}>
          <div className={classes["carousel__view"]}>{movieHTML}</div>
          {carouselIndex === 0 && (
            <button
              type="button"
              className={`${classes["carousel__button"]} ${classes["carousel__button--next"]}`}
              onClick={() => toggleOnClick(1)}
            >
              <img src={carouselNextIcon} alt="다음영화 순위보기" />
            </button>
          )}
          {carouselIndex === 1 && (
            <button
              type="button"
              className={`${classes["carousel__button"]} ${classes["carousel__button--prev"]}`}
              onClick={() => toggleOnClick(0)}
            >
              <img src={carouselPrevIcon} alt="이전영화 순위보기" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
});

export default MovieTrend;
