// !: 나중에 노래 순위랑 합치기 컴포넌트 만들어서 사용하기
import React from "react";
import { useSelector } from "react-redux";
import classes from "../Culture/SongTrend.module.css";

const BASE_URL = "https://search.naver.com/search.naver";
const TABLE_COUNT = 10;

const TVTrend = () => {
  const { TVList } = useSelector(state => state.trend);

  const firstTvList = TVList.filter((el, index) => index < TABLE_COUNT);
  const secondTvList = TVList.filter((el, index) => index >= TABLE_COUNT);

  let tvRank = 1;
  let count = 1;

  const noDataHtml = (
    <tr>
      <td colSpan="4">데이터가 없습니다.</td>
    </tr>
  );

  const handleOnClick = url => {
    window.open(`${BASE_URL}${url}`);
  };

  const getHtml = list => {
    const TVHtml = list.map((tv, index) => {
      if (index !== 0) {
        if (list[index - 1].rate === list[index].rate) {
          count += 1;
        } else {
          tvRank += count;
          count = 1;
        }
      }

      return (
        <tr key={`${tvRank}_${tv.title}`} onClick={() => handleOnClick(tv.url)}>
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
    return TVHtml;
  };

  return (
    <section className={classes.song__section}>
      <div className={classes.song__wrapper}>
        <p className="section__title">
          한 주간 높은 시청률을 기록한
          <br /> TV 프로그램을 알아보세요.
        </p>
        <div className={classes.table_wrapper}>
          <div className={classes.table_container}>
            <div className={classes.table_wrap}>
              <table className={`${classes.song_table} ${classes.tv_table}`}>
                <colgroup>
                  <col className={classes.rate_col} />
                  <col className={classes.program_col} />
                  <col className={classes.channel_col} />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan="3" className={classes.program_tr}>
                      프로그램
                    </th>
                    <th className={classes.views_tr}>시청률</th>
                  </tr>
                </thead>
                <tbody>{TVList.length === 0 ? noDataHtml : getHtml(firstTvList)}</tbody>
              </table>
            </div>
          </div>
          <div className={classes.table_container}>
            <div className={classes.table_wrap}>
              <table className={`${classes.song_table} ${classes.tv_table}`}>
                <colgroup>
                  <col className={classes.rate_col} />
                  <col className={classes.program_col} />
                  <col className={classes.channel_col} />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan="3" className={classes.program_tr}>
                      프로그램
                    </th>
                    <th className={classes.views_tr}>시청률</th>
                  </tr>
                </thead>
                <tbody>{TVList.length === 0 ? noDataHtml : getHtml(secondTvList)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVTrend;
