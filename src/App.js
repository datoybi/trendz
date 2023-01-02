import { useDispatch } from "react-redux";

import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { fetchKeyword, fetchTopNews } from "./store/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKeyword());
    dispatch(fetchTopNews());
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
