import React from "react";
import { useSelector } from "react-redux";
import classes from "./NewsTrend.module.css";
import { NEWS_BASE_URL } from "../../constants/url";

const NewsTrend = () => {
  const { news } = useSelector(state => state.trend);

  const newsHTML = news.map(([title, url]) => (
    <a
      href={`${NEWS_BASE_URL}${url}`}
      key={`${title}_${url}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <li className={classes.news__item}>
        <p className={classes["news__item--title"]}>{title}</p>
      </li>
    </a>
  ));

  return (
    <section className={classes.section}>
      <div className={classes.section__inner}>
        <p className="section__title">
          BBC Korea가 엄선한 <br />톱 뉴스를 접해보세요.
        </p>
        <ul className={classes.news__list}>{newsHTML}</ul>
      </div>
    </section>
  );
};

export default NewsTrend;
