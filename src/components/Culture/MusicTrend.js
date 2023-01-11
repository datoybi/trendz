import React from "react";
import { useSelector } from "react-redux";
import classes from "./MusicTrend.module.css";
import MusicElement from "./MusicElement";
import Table from "../UI/Table";

const DEFAULT_SONG_TITLE = ["BTS", "Dynamite"];

const MusicTrend = () => {
  const { musicList } = useSelector(state => state.trend); // musicList

  const getBestMusic = () => {
    if (musicList.length === 0) return DEFAULT_SONG_TITLE;
    return [musicList[0].singer, musicList[0].title];
  };

  const [bestSinger, bestSong] = getBestMusic();

  const emptyHtml = (
    <tr>
      <td colSpan="4">데이터가 없습니다.</td>
    </tr>
  );

  const musicElement = list =>
    list.map((song, index) => (
      <MusicElement key={`${song.title}_${song.album}`} song={song} rating={index + 1} />
    ));

  return (
    <section className={classes.section}>
      <div className={classes.section__inner}>
        <p className="section__title">
          지금 뜨는 노래는? <br />
          &apos;{bestSinger}&apos;의 &apos;{bestSong}&apos;🎶
        </p>
        <Table className={classes["music-table"]}>
          <colgroup>
            <col className={classes["music-table__col--cover"]} />
            <col className={classes["music-table__col--rating"]} />
            <col className={classes["music-table__col--title"]} />
          </colgroup>
          <thead>
            <tr>
              <th
                colSpan="3"
                className={`${classes["music-table__th"]} ${classes["music-table__th--title"]}`}
              >
                노래
              </th>
              <th className={`${classes["music-table__th"]} ${classes["music-table__th--singer"]}`}>
                가수
              </th>
              <th className={`${classes["music-table__th"]} ${classes["music-table__th--album"]}`}>
                앨범
              </th>
            </tr>
          </thead>
          <tbody>{musicList.length === 0 ? emptyHtml : musicElement(musicList)}</tbody>
        </Table>
      </div>
    </section>
  );
};

export default MusicTrend;
