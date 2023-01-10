/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "./Nav.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Nav = ({ refs }) => {
  const [keywordRef, youtubeRef, movieRef] = refs;
  const { _, height } = useWindowDimensions();
  const [fixedClass, setFixedClass] = useState("");

  const handleScroll = () => {
    if (window === undefined) return;
    const currentHeight = window.scrollY;
    currentHeight > height - 0.5 ? setFixedClass("fixed_nav") : setFixedClass("");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className={classes[fixedClass]}>
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

Nav.propTypes = {
  refs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Nav;
