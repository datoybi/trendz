import React from "react";
import classes from "./SongTrend.module.css";

const SongTrend = () => {
  return (
    <section>
      <p className={classes.section__title}>노래 Trendz - 요즘 뜨는 노래</p>
      <div>
        <table className={classes.song_table}>
          <thead>
            <tr>
              <th>순위</th>
              <th>노래명</th>
              <th>가수명</th>
              <th>엘범</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ditto</td>
              <td>NewJeans</td>
              <td>NewJeans OMG</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SongTrend;
