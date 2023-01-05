import React from "react";
import { useSelector, useDispatch } from "react-redux";

import KeywordTrend from "./KeywordTrend";
import classes from "./KeywordsTrend.module.css";
import { LOADING_KEYWORD_COUNT } from "../../constants/trendz";
import { actions } from "../../store/slice";
import plusIcon from "../../assets/plus_icon.png";

const KeywordsTrend = () => {
  const { keywords } = useSelector(state => state.trend);
  const { keywordCount } = useSelector(state => state.trend);
  const dispatch = useDispatch();

  const keywordTrend = keywords.map((keyword, index) => (
    <KeywordTrend
      key={`${new Date(keyword.pubDate).getTime()}_${keyword.keyword}`}
      keyword={keyword}
      pastPubDate={index !== 0 && keywords[index - 1].pubDate}
      currentIndex={index}
      maxCount={keywordCount}
    />
  ));

  const loadMoreKeyword = () => {
    dispatch(actions.increaseKeywordCount());
  };

  const showLoadingButton =
    keywordTrend.length >= LOADING_KEYWORD_COUNT && keywordCount !== keywordTrend.length;

  return (
    <section className={classes.keyword_section}>
      <div className={classes.keyword__Wrapper}>
        <h2 className={classes.section__title}>
          구글에 검색한 <br />
          인기 급상승 키워드를 확인해보세요.
        </h2>
        <ul className={classes.searchWords__list}>{keywordTrend}</ul>
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

// import classes from "./TrendKeyword.module.css";
// import { useState } from "react";
// import CSSTransition from "react-transition-group/CSSTransition";
// import { useSelector } from "react-redux";
// import { fetchData } from "../store/actions";

// const TrendKeyword = () => {
//   const [isActive, setIsActive] = useState(false);
//   const { keywords, keywordsIndex } = useSelector((state) => state.trend);

//   const showMoreHandler = () => {
//     setIsActive(!isActive);
//   };

//   console.log(keywords);

//   return (
//     <section>
//       <h2 className={classes.section__title}>
//         요즘 Trendz – 많이 검색한 키워드
//       </h2>
//       <ul className={classes.searchWords__list}>
//         <li>
//           <p className={classes.searchWords_date}>2022년 10월 26일</p>
//           <div className={classes.keyword__element} onClick={showMoreHandler}>
//             <span className={classes.main__keyword}>김연아</span>
//             <div className={classes.relative__keyword}>
//               <span>고우림</span>
//               <span>김연아 결혼</span>
//             </div>
//             <span className={classes.show__more}>더보기</span>
//             <CSSTransition
//               in={isActive}
//               timeout={500}
//               unmountOnExit
//               mountOnEnter
//               classNames={{
//                 enterActive: classes.openAccordion,
//                 exitActive: classes.closeArccordion,
//               }}
//             >
//               <div className={classes.keyword__detail}>
//                 <p>ppp</p>
//               </div>
//             </CSSTransition>
//           </div>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default TrendKeyword;
