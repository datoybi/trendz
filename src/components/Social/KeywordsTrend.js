import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import KeywordTrend from "./KeywordTrend";
import classes from "./KeywordsTrend.module.css";
import { LOADING_KEYWORD_COUNT } from "../../constants/trendz";
import { actions } from "../../store/slice";
import plusIcon from "../../assets/plus_icon.png";

const KeywordsTrend = () => {
  const items = useRef();
  const [keywordHeight, setKeywordHeight] = useState([]);
  const { keywords } = useSelector(state => state.trend);
  const { keywordCount } = useSelector(state => state.trend);
  const dispatch = useDispatch();

  const calculateHeight = () => {
    const height = keywordHeight.reduce((acc, element, index) => {
      if (keywordCount > index) return acc + element;
      return acc;
    }, 0);

    items.current.style.height = `${height}px`;
  };

  useEffect(() => {
    calculateHeight();
  }, [keywordHeight, keywordCount]);

  const getHeight = height => {
    setKeywordHeight(prev => [...prev, height]);
  };

  const keywordTrend = keywords.map((keyword, index) => (
    <KeywordTrend
      getHeight={getHeight}
      key={`${new Date(keyword.pubDate).getTime()}_${keyword.keyword}`}
      keyword={keyword}
      pastPubDate={index !== 0 && keywords[index - 1].pubDate}
      currentIndex={index}
      maxCount={keywordCount}
    />
  ));

  const loadMoreKeyword = () => {
    calculateHeight();
    dispatch(actions.increaseKeywordCount());
  };

  const showLoadingButton =
    keywordTrend.length >= LOADING_KEYWORD_COUNT && keywordCount !== keywordTrend.length;

  return (
    <section className={classes.keyword_section}>
      <div className={classes.keyword__Wrapper}>
        <h2 className="section__title">
          구글에 검색한 <br />
          인기 급상승 키워드를 확인해보세요.
        </h2>
        <div className={classes.items} ref={items}>
          <ul className={classes.searchWords__list}>{keywordTrend}</ul>
        </div>
        {showLoadingButton && (
          <button className={classes.show__more} type="button" onClick={loadMoreKeyword}>
            <img src={plusIcon} alt="더보기" />
          </button>
        )}
      </div>
    </section>
  );
};

export default KeywordsTrend;
