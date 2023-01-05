import React from "react";
import { useSelector } from "react-redux";
import classes from "./SongTrend.module.css";

const SongTrend = () => {
  const { songList } = useSelector(state => state.trend);

  const noDataHtml = (
    <tr>
      <td colSpan="4">데이터가 없습니다.</td>
    </tr>
  );

  const songHTML = songList.map((song, index) => (
    <tr key={`${song.title}_${song.album}`}>
      <td>{index + 1}</td>
      <td>{song.title}</td>
      <td>{song.singer}</td>
      <td>{song.album}</td>
    </tr>
  ));
  // 이거 td 줄인거는 alt 해서 볼수있게 하기 - 웹 접근성
  return (
    <section>
      <p className={classes.section__title}>노래 Trendz - 요즘 뜨는 노래</p>
      <div>
        <table className={classes.song_table}>
          <thead>
            <tr>
              <th className={classes.col1}>순위</th>
              <th className={classes.col2}>노래명</th>
              <th className={classes.col3}>가수명</th>
              <th className={classes.col4}>앨범</th>
            </tr>
          </thead>
          <tbody>{songList.length === 0 ? noDataHtml : songHTML}</tbody>
        </table>
      </div>
    </section>
  );
};

export default SongTrend;
