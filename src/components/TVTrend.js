// !: 나중에 노래 순위랑 합치기 컴포넌트 만들어서 사용하기
import React from "react";
import classes from "./SongTrend.module.css";

const TVTrend = () => {
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
          <tbody>
            <tr>
              <td>1</td>
              <td>삼남매가 용감하게</td>
              <td>KBS</td>
              <td>22.8</td>
            </tr>
            <tr>
              <td>2</td>
              <td>내눈의 콩깍지</td>
              <td>KBS1</td>
              <td>217.8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TVTrend;
