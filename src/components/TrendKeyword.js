import React from "react";
import PropTypes from "prop-types";
import classes from "./TrendKeywords.module.css";
//  DOMPurify 같은걸로 snitalize 해주기

const TrendKeyword = ({ keyword, pastPubDate, currentIndex, maxCount }) => {
  const currentDate = new Date(keyword.pubDate).toLocaleDateString();
  const pastDate = pastPubDate && new Date(pastPubDate).toLocaleDateString();

  const keywordHTML = (
    <li>
      {pastDate !== currentDate && <span className={classes.searchWords_date}>{currentDate}</span>}
      <div className={classes.keyword__element}>
        <span className={classes.main__keyword}>{keyword.keyword}</span>
        <span className={classes.keyword__traffic}>{keyword.traffic}회 이상 검색</span>
        {keyword.news.map(newsElement => (
          <a href={newsElement.url} key={newsElement.url} target="_blank" rel="noopener noreferrer">
            <span dangerouslySetInnerHTML={{ __html: newsElement.title }} />
            <span className={classes.news_source}>{newsElement.source}</span>
          </a>
        ))}
      </div>
    </li>
  );

  return <>{maxCount > currentIndex && keywordHTML}</>;
};

TrendKeyword.propTypes = {
  keyword: PropTypes.exact({
    pubDate: PropTypes.string,
    keyword: PropTypes.string,
    traffic: PropTypes.string,
    news: PropTypes.array,
  }).isRequired,
  pastPubDate: PropTypes.node.isRequired,
  currentIndex: PropTypes.node.isRequired,
  maxCount: PropTypes.node.isRequired,
};

export default TrendKeyword;
