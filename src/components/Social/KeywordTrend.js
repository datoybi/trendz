import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classes from "./KeywordsTrend.module.css";
//  DOMPurify 같은걸로 snitalize 해주기

const KeywordTrend = ({ getHeight, keyword, pastPubDate }) => {
  const ref = useRef(null);
  const currentDate = new Date(keyword.pubDate).toLocaleDateString();
  const pastDate = pastPubDate && new Date(pastPubDate).toLocaleDateString();

  useEffect(() => {
    getHeight(ref.current.offsetHeight);
  }, []);

  const keywordHTML = (
    <li ref={ref}>
      {pastDate !== currentDate && <span className={classes.searchWords_date}>{currentDate}</span>}
      <div className={classes.keyword__element}>
        <span className={classes.main__keyword}>{keyword.keyword}</span>
        <span className={classes.keyword__traffic}>{keyword.traffic}회 이상 검색</span>
        <div className={classes.news_wrapper}>
          <div className={classes.news_wrap}>
            {keyword.news.map(newsElement => (
              <a
                href={newsElement.url}
                key={newsElement.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={classes.keyword__news}>
                  <span
                    className={classes.title}
                    dangerouslySetInnerHTML={{ __html: newsElement.title }}
                  />
                  <span className={classes.news_source}>{newsElement.source}</span>
                </p>
              </a>
            ))}
          </div>
          <span className={classes.thumbnail}>
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
