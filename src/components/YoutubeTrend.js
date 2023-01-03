import React from "react";
import { useSelector } from "react-redux";
import classes from "./YoutubeTrend.module.css";

const YOUTUBE_PLAY_URL = "https://www.youtube.com/watch?v=";

const YouTubeTrend = () => {
  const { youtubeList } = useSelector(state => state.trend);

  const youtubeListHtml = youtubeList.map((el, index) => (
    <li key={el.videoId}>
      <div className={classes.img_wrap}>
        <a href={`${YOUTUBE_PLAY_URL}${el.videoId}`} target="_blank" rel="noopener noreferrer">
          <img src={el.imgURL} alt={el.imgURL} />
        </a>
      </div>
      <div className={classes.info_wrap}>
        <div className={classes.rank}>
          <span className={classes.num}>
            <span className="blind">랭킹</span>
            {index + 1}
          </span>
        </div>
        <div className={classes.info}>
          <a
            href={`${YOUTUBE_PLAY_URL}${el.videoId}`}
            className={classes.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {el.title}
          </a>
          <a
            href={`${YOUTUBE_PLAY_URL}${el.videoId}`}
            className={classes.host}
            target="_blank"
            rel="noopener noreferrer"
          >
            {el.host}
          </a>
          <span className={classes.view}>
            <span className="blind">뷰</span>
            {el.view.replace(" 누적 조회수", "")}
          </span>
        </div>
      </div>
    </li>
  ));

  return (
    <section>
      <p className={classes.section__title}>
        유튜브 Trendz - 24시간 동안 한국에서 가장 많이 본 유투브 영상
      </p>
      <ol className={classes.youtube_list}>{youtubeListHtml}</ol>
    </section>
  );
};

export default YouTubeTrend;
