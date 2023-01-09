/* eslint-disable react/no-array-index-key */
import React from "react";
import { useSelector } from "react-redux";
import classes from "./TVTrend.module.css";
import TVElement from "./TVElement";

const TABLE_COUNT = 10;

const TVTrend = () => {
  const { TVList } = useSelector(state => state.trend);
  const firstTvList = TVList.filter((_, index) => index < TABLE_COUNT);
  const secondTvList = TVList.filter((_, index) => index >= TABLE_COUNT);

  let rank = 1;
  let rankCount = 1;

  const addTVRankCount = () => {
    rankCount += 1;
  };

  const changeTVRank = () => {
    rank += rankCount;
    rankCount = 1;
  };

  const getRank = () => {
    return rank;
  };

  const tableHtml = [firstTvList, secondTvList].map((list, index) => (
    <TVElement
      key={`${index}`}
      tvList={list}
      addTVRankCount={addTVRankCount}
      changeTVRank={changeTVRank}
      getRank={getRank}
    />
  ));

  return (
    <section className={classes.tv__section}>
      <div className={classes.tv__wrapper}>
        <p className="section__title">
          한 주간 높은 시청률을 기록한
          <br /> TV 프로그램을 알아보세요.
        </p>
        <div className={classes.table_wrapper}>{tableHtml}</div>
      </div>
    </section>
  );
};

export default TVTrend;
