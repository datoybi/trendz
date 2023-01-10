/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import classes from "./Nav.module.css";

const Nav = ({ refs }) => {
  const [keywordRef, youtubeRef, movieRef] = refs;

  const handleSocialClick = () => {
    keywordRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleEnterClick = () => {
    youtubeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleCultureClick = () => {
    movieRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav>
      <span role="button" tabIndex={0} onClick={handleSocialClick}>
        사회
      </span>
      <span role="button" tabIndex={0} onClick={handleEnterClick}>
        엔터
      </span>
      <span role="button" tabIndex={0} onClick={handleCultureClick}>
        문화
      </span>
    </nav>
  );
};

export default Nav;
