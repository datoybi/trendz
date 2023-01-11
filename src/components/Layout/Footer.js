import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__inner}>
        <span className={classes.footer__text}>
          © 2023 Trendz Created By&nbsp;
          <a
            className={classes["footer__text--decoration-underline"]}
            href="https://github.com/datoybi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dasom Yun
          </a>
          .
        </span>
        <span className={classes.footer__text}>
          Have some questions? Send an email to&nbsp;
          <span className={classes["footer__text--decoration-underline"]}>dsy0302@gmail.com</span>.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
