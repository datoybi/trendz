import React from "react";
import { useSelector } from "react-redux";
import classes from "./MusicTrend.module.css";
import SongElement from "./MusicElement";
import Table from "../UI/Table";

const DEFAULT_SONG_TITLE = ["BTS", "Dynamite"];

const MusicTrend = () => {
  const { songList } = useSelector(state => state.trend);

  const emptyHtml = (
    <tr>
      <td colSpan="4">데이터가 없습니다.</td>
    </tr>
  );

  const getSongElement = list =>
    list.map((song, index) => (
      <SongElement key={`${song.title}_${song.album}`} song={song} rating={index + 1} />
    ));

  // td에 alt 넣기
  const getBestSinger = () => {
    if (songList.length === 0) return DEFAULT_SONG_TITLE;
    return [songList[0].singer, songList[0].title];
  };

  const [bestSinger, bestSong] = getBestSinger();

  return (
    <section className={classes.song__section}>
      <div className={classes.song__wrapper}>
        <p className="section__title">
          지금 뜨는 노래는? <br />
          &apos;{bestSinger}&apos;의 &apos;{bestSong}&apos;🎶
        </p>
        <Table className={classes.song_table}>
          <colgroup>
            <col className={classes.cover_col} />
            <col className={classes.rating_col} />
            <col className={classes.title_col} />
          </colgroup>
          <thead>
            <tr>
              <th colSpan="3" className={classes.title_tr}>
                노래
              </th>
              <th className={classes.singer_tr}>가수</th>
              <th className={classes.album_tr}>앨범</th>
            </tr>
          </thead>
          <tbody>{songList.length === 0 ? emptyHtml : getSongElement(songList)}</tbody>
        </Table>
      </div>
    </section>
  );
};

export default MusicTrend;
