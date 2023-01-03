import { useSelector, useDispatch } from "react-redux";

import TrendKeyword from "./TrendKeyword";
import classes from "./TrendKeywords.module.css";
import { LOADING_KEYWORD_COUNT } from "../constants/trendz";
import { actions } from "../store/slice.js";

const TrendKeywords = () => {
  const { keywords } = useSelector((state) => state.trend);
  const { keywordCount } = useSelector((state) => state.trend);
  const dispatch = useDispatch();

  const trendKeywords = keywords.map((keyword, index) => (
    <TrendKeyword
      key={`${new Date(keyword.pubDate).getTime()}_${index}`}
      keyword={keyword}
      pastPubDate={index !== 0 && keywords[index - 1].pubDate}
      index={index}
      maxCount={keywordCount}
    />
  ));

  const showMoreKeyword = () => {
    dispatch(actions.increaseKeywordCount());
  };

  return (
    <section>
      <h2 className={classes.section__title}>
        요즘 Trendz – 많이 검색한 키워드
      </h2>
      <ul className={classes.searchWords__list}>{trendKeywords}</ul>
      {trendKeywords.length >= LOADING_KEYWORD_COUNT &&
        keywordCount !== trendKeywords.length && (
          <button onClick={showMoreKeyword}>더 로드하기</button>
        )}
    </section>
  );
};

export default TrendKeywords;

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
