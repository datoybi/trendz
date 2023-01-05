import React from "react";
import { useSelector } from "react-redux";
import classes from "./NewsTrend.module.css";

const NEWS_BASE_URL = "https://www.bbc.com";

const NewsTrend = () => {
  const { news } = useSelector(state => state.trend);

  const newsHTML = news.map(([title, url]) => (
    <a
      href={`${NEWS_BASE_URL}${url}`}
      key={`${title}_${url}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <li>
        <p className={classes.news__title}>{title}</p>
      </li>
    </a>
  ));

  return (
    <section className={classes.news__section}>
      <div className={classes.news_wrapper}>
        <p className="section__title">
          BBC Korea가 엄선한 <br />톱 뉴스를 접해보세요.
        </p>
        <ul className={classes.news__list}>{newsHTML}</ul>
      </div>
    </section>
  );
};

export default NewsTrend;
