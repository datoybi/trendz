import React from "react";

import Social from "./Social/Social";
import Culture from "./Culture/Culture";
import Entertainment from "./Entertainment/Entertainment";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <article>
        <Social />
        <Culture />
        <Entertainment />
      </article>
    </main>
  );
};

export default Main;
