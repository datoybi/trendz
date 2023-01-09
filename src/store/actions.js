import axios from "axios";
import { actions } from "./slice";
import {
  keywordCrawling,
  newsCrawling,
  youtubeFirstCrawling,
  youtubeSecondCrawling,
  songCrawling,
  movieCrawling,
  TVCrawling,
} from "./crawling";

const GOOGLE_TRENDS_URL = "/trends/trendingsearches/daily/rss?geo=KR";
const TOP_NEWS_URL = "/mostread.json";
const YOUTUBE_URL = "/youtube-video-rank/top-kr-all-video-day";
const TOTAL_YOUTUBE_LIST = 20 - 5;
const YOUTUBE_SECOND_URL = `/youtube-video-rank/_top-videos?country=kr&category=all&offset=5&pageSize=${TOTAL_YOUTUBE_LIST}`;
const SONG_URL = "/chart/";
const MOVIE_URL = "/ranking/reservation";
const TV_URL = "/search.naver?where=nexearch&sm=tab_etc&mra=blUw&qvt=0&query=주간%20시청률";

export const fetchKeyword = () => {
  return async dispatch => {
    const fetchHTML = async () => {
      const trendProxy = window.location.hostname === "localhost" ? "" : "/trend_proxy";
      const response = await axios.get(`${trendProxy}${GOOGLE_TRENDS_URL}`);
      if (!response.data) throw new Error("Could not fetch data!");
      return response.data;
    };

    try {
      const htmlString = await fetchHTML();
      const result = keywordCrawling(htmlString);
      dispatch(actions.getKeyWord(result));
    } catch (error) {
      console.log(error || "Something went wrong");
      // 나중에 에러처리도 해주기
    }
  };
};

export const fetchTopNews = () => {
  return async dispatch => {
    const fetchHTML = async () => {
      const newsProxy = window.location.hostname === "localhost" ? "" : "/news_proxy";
      const response = await axios.get(`${newsProxy}${TOP_NEWS_URL}`);
      if (!response.data) throw new Error("Could not fetch data!");
      return response.data;
    };

    try {
      const { records } = await fetchHTML();
      const result = newsCrawling(records);
      dispatch(actions.getNews(result));
    } catch (error) {
      console.log(error || "Something went wrong");
      // 나중에 에러처리도 해주기
    }
  };
};

export const fetchYoutube = () => {
  return async dispatch => {
    const fetchHTML = async () => {
      const youtubeProxy = window.location.hostname === "localhost" ? "" : "/youtube_proxy";
      const response = await axios.get(`${youtubeProxy}${YOUTUBE_URL}`);
      if (!response.data) throw new Error("Could not fetch data!");
      return response.data;
    };

    const fetchSecondHTML = async () => {
      const youtubeProxy = window.location.hostname === "localhost" ? "" : "/youtube_proxy";
      const response = await axios.get(`${youtubeProxy}${YOUTUBE_SECOND_URL}`);
      if (!response.data) throw new Error("Could not fetch data!");
      return response.data;
    };

    try {
      const htmlString = await fetchHTML();
      let result = youtubeFirstCrawling(htmlString);

      const secondHtmlString = await fetchSecondHTML();
      const newSecondResult = youtubeSecondCrawling(secondHtmlString);
      result = [...result, ...newSecondResult];

      dispatch(actions.getYoutube(result));
    } catch (error) {
      console.log(error || "Something went wrong");
      // 나중에 에러처리도 해주기
    }
  };
};

export const fetchSong = () => {
  return async dispatch => {
    const fetchHTML = async () => {
      const songProxy = window.location.hostname === "localhost" ? "" : "/song_proxy";
      const response = await axios.get(`${songProxy}${SONG_URL}`);
      if (!response.data) throw new Error("Could not fetch data!");
      return response.data;
    };

    try {
      const htmlString = await fetchHTML();
      const result = songCrawling(htmlString);

      dispatch(actions.getSongList(result));
    } catch (error) {
      console.log(error || "Something went wrong");
      // 나중에 에러처리도 해주기
    }
  };
};

export const fetchMovie = () => {
  return async dispatch => {
    const fetchHTML = async () => {
      const movieProxy = window.location.hostname === "localhost" ? "" : "/movie_proxy";
      const response = await axios.get(`${movieProxy}${MOVIE_URL}`);
      if (!response.data) throw new Error("Could not fetch data!");
      return response.data;
    };

    try {
      const htmlString = await fetchHTML();
      const result = movieCrawling(htmlString);
      dispatch(actions.getMovieList(result));
    } catch (error) {
      console.log(error || "Something went wrong");
      // 나중에 에러처리도 해주기
    }
  };
};

export const fetchTV = () => {
  return async dispatch => {
    const fetchHTML = async () => {
      const tvProxy = window.location.hostname === "localhost" ? "" : "/tv_proxy";
      const response = await axios.get(`${tvProxy}${TV_URL}`);
      if (!response.data) throw new Error("Could not fetch data!");
      return response.data;
    };

    try {
      const htmlString = await fetchHTML();
      const result = TVCrawling(htmlString);
      dispatch(actions.getTVList(result));
    } catch (error) {
      console.log(error || "Something went wrong");
      // 나중에 에러처리도 해주기
    }
  };
};
