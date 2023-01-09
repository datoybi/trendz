import React, { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const initData = async () => {
      Promise.all([
        await dispatch(fetchKeyword()),
        await dispatch(fetchTopNews()),
        await dispatch(fetchMovie()),
        // await dispatch(fetchYoutube()),
        await dispatch(fetchSong()),
        await dispatch(fetchTV()),
      ]).then(setIsLoading(false));
    };

    initData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div>LOADING...</div>
      ) : (
        <>
          <Header />
          <main>
            <article>
              <Social />
              <Culture />
              <Entertainment />
            </article>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
