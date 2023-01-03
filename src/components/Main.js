import React from "react";

import TrendKeywords from "./TrendKeywords";
import NewsTrend from "./NewsTrend";
// import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <article>
        <TrendKeywords />
        <NewsTrend />
      </article>
    </main>
  );
};

export default Main;
