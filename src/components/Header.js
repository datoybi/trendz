import classes from "./Header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <a className={classes.logo} href="#">
        <img src={logo} alt="trendz" />
      </a>
      <nav>
        <a href="#">Home</a>
        <a href="#">유머</a>
        <a href="#">유투브</a>
      </nav>
    </header>
  );
};

export default Header;
