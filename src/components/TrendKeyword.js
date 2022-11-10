import classes from "./TrendKeywords.module.css";

const TrendKeyword = ({ keyword, pastPubDate }) => {
  const currentDate = new Date(keyword.pubDate).toLocaleDateString();
  const pastDate = pastPubDate && new Date(pastPubDate).toLocaleDateString();

  return (
    <li>
      {pastDate !== currentDate && (
        <span className={classes.searchWords_date}>{currentDate}</span>
      )}
      <div className={classes.keyword__element}>
        <span className={classes.main__keyword}>{keyword.keyword}</span>
        <span className={classes.keyword__traffic}>
          {keyword.traffic}회 이상 검색
        </span>
        {keyword.news.map((newsElement) => (
          <a href={newsElement.url}>
            <span
              dangerouslySetInnerHTML={{ __html: newsElement.title }}
            ></span>
            <span className={classes.news_source}> {newsElement.source}</span>
          </a>
        ))}
      </div>
    </li>
  );
};

export default TrendKeyword;
