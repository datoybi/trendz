import classes from "./TrendKeywords.module.css";

const TrendKeyword = ({ keyword, pastPubDate, index, maxCount }) => {
  const currentDate = new Date(keyword.pubDate).toLocaleDateString();
  const pastDate = pastPubDate && new Date(pastPubDate).toLocaleDateString();

  const keywordHTML = (
    <li>
      {pastDate !== currentDate && (
        <span className={classes.searchWords_date}>{currentDate}</span>
      )}
      <div className={classes.keyword__element}>
        <span className={classes.main__keyword}>{keyword.keyword}</span>
        <span className={classes.keyword__traffic}>
          {keyword.traffic}회 이상 검색
        </span>
        {keyword.news.map((newsElement, index) => (
          <a
            href={newsElement.url}
            key={`${newsElement.url}_${index}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              dangerouslySetInnerHTML={{ __html: newsElement.title }}
              // 이거 DOMPurify 같은걸로 snitalize 해주기
            ></span>
            <span className={classes.news_source}>{newsElement.source}</span>
          </a>
        ))}
      </div>
    </li>
  );

  return <>{maxCount > index && keywordHTML}</>;
};

export default TrendKeyword;
