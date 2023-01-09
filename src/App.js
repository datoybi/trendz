import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./reset.css";
import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Social from "./components/Social/Social";
import Culture from "./components/Culture/Culture";
import Entertainment from "./components/Entertainment/Entertainment";

import {
  fetchKeyword,
  fetchSong,
  fetchTopNews,
  fetchYoutube,
  fetchTV,
  fetchMovie,
} from "./store/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKeyword());
    dispatch(fetchTopNews());
    // dispatch(fetchYoutube());
    dispatch(fetchMovie());
    dispatch(fetchSong());
    dispatch(fetchTV());
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <article>
          <Social />
          <Culture />
          <Entertainment />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default App;
