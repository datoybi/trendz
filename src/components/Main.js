import React from "react";

import Social from "./Social/Social";
import YouTubeTrend from "./YoutubeTrend";
import SongTrend from "./SongTrend";
import MovieTrend from "./MovieTrend";
import TVTrend from "./TVTrend";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <article>
        <Social />
        <YouTubeTrend />
        <SongTrend />
        <MovieTrend />
        <TVTrend />
      </article>
    </main>
  );
};

export default Main;
