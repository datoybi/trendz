import SearchWords from "./SearchWords";
import NewsTrend from "./NewsTrend";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <article>
        <SearchWords />
        <NewsTrend />
      </article>
    </main>
  );
};

export default Main;
