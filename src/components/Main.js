import React from "react";

import TrendKeywords from "./KeywordsTrend";
import NewsTrend from "./NewsTrend";
import YouTubeTrend from "./YoutubeTrend";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <article>
        <TrendKeywords />
        <NewsTrend />
        <YouTubeTrend />
      </article>
    </main>
  );
};

export default Main;
