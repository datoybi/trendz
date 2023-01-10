import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import "./reset.css";
import "./App.css";
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";
import Home from "./components/Layout/Home";
import KeywordsTrend from "./components/Social/KeywordsTrend";
import NewsTrend from "./components/Social/NewsTrend";
import MovieTrend from "./components/Culture/MovieTrend";
import MusicTrend from "./components/Culture/MusicTrend";
import TVTrend from "./components/Entertainment/TVTrend";
import YoutubeTrend from "./components/Entertainment/YoutubeTrend";

import {
  fetchKeyword,
  fetchMusic,
  fetchTopNews,
  fetchYoutube,
  fetchTV,
  fetchMovie,
} from "./store/actions";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const keywordRef = useRef(null);
  const movieRef = useRef(null);
  const youtubeRef = useRef(null);
  // const option = { threshold: 0, rootMargin: `-${document.body.scrollHeight / 2 - 1}px 0px` };
  // const option = {};

  useEffect(() => {
    const initData = async () => {
      Promise.all([
        await dispatch(fetchKeyword()),
        await dispatch(fetchTopNews()),
        await dispatch(fetchMovie()),
        // await dispatch(fetchYoutube()),
        await dispatch(fetchMusic()),
        await dispatch(fetchTV()),
      ]).then(setIsLoading(false));
    };

    initData();
    // 로딩 다 되면 적용되게 해야함 아그러면 ref를 못찾..
    // const observer = new IntersectionObserver(entry => {
    //   console.log(entry);
    //   if (entry[0].isIntersecting) {
    //     console.log("요요요기기기기");
    //     // newsRef.current.scrollIntoView();
    //   }
    // }, option);

    // if (newsRef.current) {
    //   observer.observe(newsRef.current);
    // }
    // return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <header>
        <Home />
        <Nav refs={[keywordRef, youtubeRef, movieRef]} />
      </header>
      <main>
        <article>
          <KeywordsTrend ref={keywordRef} />
          <NewsTrend />
          <YoutubeTrend ref={youtubeRef} />
          <TVTrend />
          <MovieTrend ref={movieRef} />
          <MusicTrend />
        </article>
      </main>
      <Footer />
    </div>
    // <>
    //   {isLoading ? (
    //     <div>LOADING...</div>
    //   ) : (
    //     <div className="App">
    //       <Home />
    //       {/* <Header /> */}
    //       <main ref={ref}>
    //         <article>
    //           <Social />
    //           <Culture />
    //           <Entertainment />
    //         </article>
    //       </main>
    //       <Footer />
    //     </div>
    //   )}
    // </>
  );
};

export default App;
