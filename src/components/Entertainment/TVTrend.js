// !: 나중에 노래 순위랑 합치기 컴포넌트 만들어서 사용하기
import React from "react";
import { useSelector } from "react-redux";
import classes from "../Culture/SongTrend.module.css";

const BASE_URL = "https://search.naver.com/search.naver";

const TVTrend = () => {
  const { TVList } = useSelector(state => state.trend);
  let tvRank = 1;
  let count = 1;

  const noDataHtml = (
    <tr>
      <td colSpan="4">데이터가 없습니다.</td>
    </tr>
  );

  const TVHtml = TVList.map((tv, index) => {
    if (index !== 0) {
      if (TVList[index - 1].rate === TVList[index].rate) {
        count += 1;
      } else {
        tvRank += count;
        count = 1;
      }
    }

    return (
      <tr key={`${tvRank}_${tv.title}`}>
        <td>{tvRank}</td>
        <td>
          <a href={`${BASE_URL}${tv.url}`} target="_blank" rel="noopener noreferrer">
            {tv.title}
          </a>
        </td>
        <td>{tv.cast}</td>
        <td>{tv.rate}</td>
      </tr>
    );
  });

  return (
    <section>
      <p className={classes.section__title}>TV Trendz - 한 주간 시청률 수 높은 TV 프로그램</p>
      <div>
        <table className={classes.song_table}>
          <thead>
            <tr>
              <th className={classes.col1}>순위</th>
              <th className={classes.col2}>프로그램</th>
              <th className={classes.col3}>채널</th>
              <th className={classes.col4}>시청률</th>
            </tr>
          </thead>
          <tbody>{TVList.length === 0 ? noDataHtml : TVHtml}</tbody>
        </table>
      </div>
    </section>
  );
};

export default TVTrend;
