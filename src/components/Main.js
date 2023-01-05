import React from "react";

import Social from "./Social/Social";
import YouTubeTrend from "./YoutubeTrend";
import Culture from "./Culture/Culture";
import TVTrend from "./TVTrend";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <article>
        <Social />
        <Culture />
        {/* <YouTubeTrend /> */}
        {/* <TVTrend /> */}
      </article>
    </main>
  );
};

export default Main;
