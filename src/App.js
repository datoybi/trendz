import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { fetchKeyword, fetchSong, fetchTopNews, fetchYoutube } from "./store/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKeyword());
    dispatch(fetchTopNews());
    // dispatch(fetchYoutube());
    dispatch(fetchSong());
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
