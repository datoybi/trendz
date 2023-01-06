import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import thumbUp from "../../assets/thumbs-up.png";
import classes from "./MovieTrend.module.css";
import nextIcon from "../../assets/next_icon.png";
import prevIcon from "../../assets/prev_icon.png";

const MOVIE_BASE_URL = "https://movie.daum.net/";
const DISPLAY_COUNT = 10;

const MovieTrend = () => {
  const items = useRef();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { movieList } = useSelector(state => state.trend);

  const firstMovieHtml = movieList.filter((_, index) => index < DISPLAY_COUNT);
  const secondMovieHtml = movieList.filter((_, index) => index >= DISPLAY_COUNT);

  const movieElement = movie => (
    <div className={classes.movie_wrapper} key={movie.URL}>
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

  const movieHTML = (
    <div className={classes.carouselView}>
      <div className={classes.movieItems} ref={items}>
        <div className={classes.movieItem}>
          <div className={classes.first}>{firstMovieHtml.map(movie => movieElement(movie))}</div>
        </div>
        <div className={classes.movieItem}>
          <div className={classes.second}>{secondMovieHtml.map(movie => movieElement(movie))}</div>
        </div>
      </div>
    </div>
  );

  const toggleOnClick = newIndex => {
    items.current.style.transform = `translate3d(-${980 * newIndex}px, 0, 0)`;
    setCarouselIndex(newIndex);
  };

  // 버튼 생기는것도 transition 으로 할 수 있쥐 csstransition 사용해야 할듯????
  return (
    <section>
      <div className={classes.movie__wrapper}>
        <p className="section__title">
          요즘 상영하는 영화와 <br />
          예매 순위를 알아보세요.
          <br />
        </p>
        <div className={classes.container}>{movieHTML}</div>
        {carouselIndex === 1 && (
          <button type="button" className={classes.prevButton} onClick={() => toggleOnClick(0)}>
            <img src={prevIcon} alt="다음영화 순위보기" />
          </button>
        )}
        {carouselIndex === 0 && (
          <button className={classes.nextButton} type="button" onClick={() => toggleOnClick(1)}>
            <img src={nextIcon} alt="다음영화 순위보기" />
          </button>
        )}
      </div>
    </section>
  );
};

export default MovieTrend;
