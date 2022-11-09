import classes from "./TrendKeyword.module.css";
import { useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";
// import "./transition.css";

const TrendKeyword = () => {
  const [isActive, setIsActive] = useState(false);

  const showMoreHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <section>
      <h2 className={classes.section__title}>
        요즘 Trendz – 많이 검색한 키워드
      </h2>
      <ul className={classes.searchWords__list}>
        <li>
          <p className={classes.searchWords_date}>2022년 10월 26일</p>
          <div className={classes.keyword__element} onClick={showMoreHandler}>
            <span className={classes.main__keyword}>김연아</span>
            <div className={classes.relative__keyword}>
              <span>고우림</span>
              <span>김연아 결혼</span>
            </div>
            <span className={classes.show__more}>더보기</span>
            <CSSTransition
              in={isActive}
              timeout={500}
              unmountOnExit
              mountOnEnter
              classNames={{
                enterActive: classes.openAccordion,
                exitActive: classes.closeArccordion,
              }}
            >
              <div className={classes.keyword__detail}>
                <p>ppp</p>
              </div>
            </CSSTransition>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TrendKeyword;
