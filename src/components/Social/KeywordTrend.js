import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as DOMPurify from "dompurify";
import classes from "./KeywordTrend.module.css";

const KeywordTrend = ({ getHeight, keyword, pastPubDate }) => {
  const liRef = useRef(null);
  const currentDate = new Date(keyword.pubDate).toLocaleDateString();
  const pastDate = pastPubDate && new Date(pastPubDate).toLocaleDateString();
  const showDate = pastDate !== currentDate;

  useEffect(() => {
    getHeight(liRef.current.offsetHeight);
  }, []);

  const keywordHTML = (
    <li ref={liRef}>
      {showDate && <span className={classes["keyword-date"]}>{currentDate}</span>}
      <div className={classes["keyword-info"]}>
        <span className={classes["keyword-main"]}>{keyword.keyword}</span>
        <span className={classes["keyword-traffic"]}>{keyword.traffic}회 이상 검색</span>
        <div className={classes["keyword-news"]}>
          <div className={classes["keyword-news__inner"]}>
            {keyword.news.map(newsElement => (
              <a
                href={newsElement.url}
                key={newsElement.url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes["keyword-news__link"]}
              >
                <ul>
                  <li
                    className={classes["keyword-news__item"]}
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(newsElement.title) }}
                  />
                  <li
                    className={`${classes["keyword-news__item"]} ${classes["keyword-news__item-source"]}`}
                  >
                    {newsElement.source}
                  </li>
                </ul>
              </a>
            ))}
          </div>
          <span className={classes["keyword-news__thumbnail"]}>
            <img src={keyword.imgURL} alt={`${keyword.keyword} 대표사진`} />
          </span>
        </div>
      </div>
    </li>
  );

  return <>{keywordHTML}</>;
};

KeywordTrend.propTypes = {
  getHeight: PropTypes.func.isRequired,
  keyword: PropTypes.exact({
    pubDate: PropTypes.string,
    keyword: PropTypes.string,
    traffic: PropTypes.string,
    news: PropTypes.array,
    imgURL: PropTypes.string,
  }).isRequired,
  pastPubDate: PropTypes.node.isRequired,
};

export default KeywordTrend;
