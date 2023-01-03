import { useSelector } from "react-redux";
import classes from "./NewsTrend.module.css";

const NEWS_BASE_URL = "https://www.bbc.com";

const NewsTrend = () => {
  const { news } = useSelector((state) => state.trend);

  const newsHTML = news.map(([title, url], index) => (
    <li key={index}>
      <a href={`${NEWS_BASE_URL}${url}`}>
        <p className={classes.news__title}>{title}</p>
        <p className={classes.news__update}>
          업데이트 : {new Date(1672625985000).toLocaleDateString()}
        </p>
      </a>
    </li>
  ));

  return (
    <section className={classes.section__title}>
      <p>뉴스 Trendz - TOP News</p>
      <ul className={classes.news__list}>{newsHTML}</ul>
    </section>
  );
};

export default NewsTrend;
