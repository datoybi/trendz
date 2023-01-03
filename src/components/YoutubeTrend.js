import React from "react";
import classes from "./YoutubeTrend.module.css";
import thumbnailImg from "../assets/thumb_sub.jpg";

const YouTubeTrend = () => {
  return (
    <section>
      <p className={classes.section__title}>
        유튜브 Trendz - 24시간 동안 한국에서 가장 많이 본 유투브 영상{" "}
      </p>
      <div>
        <ol className={classes.youtube_list}>
          <li>
            <div className={classes.img_wrap}>
              <a href="#">
                <img src="https://via.placeholder.com/240x141" alt="" />
              </a>
            </div>
            <div className={classes.info_wrap}>
              <div className={classes.rank}>
                <span className={classes.num}>
                  <span className="blind">랭킹</span>4
                </span>
              </div>
              <div className={classes.info}>
                <a href="#" className={classes.title}>
                  [ENG] 신년모임은 핑계고
                </a>
                <a href="#" className={classes.host}>
                  뜬뜬 DdeunDdeun
                </a>
                <span className={classes.view}>
                  <span className="blind">뷰</span>
                  99,999
                </span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default YouTubeTrend;
