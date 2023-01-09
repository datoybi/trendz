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
import { sendRequest } from "../utils/http";
import ERROR_MESSAGES from "../constants/errorMessage";

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
    const trendProxy = window.location.hostname === "localhost" ? "" : "/trend_proxy";
    const url = `${trendProxy}${GOOGLE_TRENDS_URL}`;
    const htmlString = await sendRequest(url, ERROR_MESSAGES.KEYWORD_FETCH_ERROR);
    const result = keywordCrawling(htmlString);
    dispatch(actions.getKeyWord(result));
  };
};

export const fetchTopNews = () => {
  return async dispatch => {
    const newsProxy = window.location.hostname === "localhost" ? "" : "/news_proxy";
    const url = `${newsProxy}${TOP_NEWS_URL}`;
    const { records } = await sendRequest(url, ERROR_MESSAGES.NEWS_FETCH_ERROR);
    const result = newsCrawling(records);
    dispatch(actions.getNews(result));
  };
};

export const fetchYoutube = () => {
  return async dispatch => {
    const youtubeProxy = window.location.hostname === "localhost" ? "" : "/youtube_proxy";

    const firstUrl = `${youtubeProxy}${YOUTUBE_URL}`;
    const htmlString = await sendRequest(firstUrl, ERROR_MESSAGES.YOUTUBE_FETCH_ERROR);
    let result = youtubeFirstCrawling(htmlString);

    const secondUrl = `${youtubeProxy}${YOUTUBE_SECOND_URL}`;
    const secondHtmlString = await sendRequest(secondUrl, ERROR_MESSAGES.YOUTUBE_FETCH_ERROR);
    const newSecondResult = youtubeSecondCrawling(secondHtmlString);
    result = [...result, ...newSecondResult];
    dispatch(actions.getYoutube(result));
  };
};

export const fetchSong = () => {
  return async dispatch => {
    const songProxy = window.location.hostname === "localhost" ? "" : "/song_proxy";
    const url = `${songProxy}${SONG_URL}`;
    const htmlString = await sendRequest(url, ERROR_MESSAGES.MUSIC_FETCH_ERROR);
    const result = songCrawling(htmlString);

    dispatch(actions.getSongList(result));
  };
};

export const fetchMovie = () => {
  return async dispatch => {
    const movieProxy = window.location.hostname === "localhost" ? "" : "/movie_proxy";
    const url = `${movieProxy}${MOVIE_URL}`;
    const htmlString = await sendRequest(url, ERROR_MESSAGES.MOVIE_FETCH_ERROR);
    const result = movieCrawling(htmlString);
    dispatch(actions.getMovieList(result));
  };
};

export const fetchTV = () => {
  return async dispatch => {
    const tvProxy = window.location.hostname === "localhost" ? "" : "/tv_proxy";
    const url = `${tvProxy}${TV_URL}`;
    const htmlString = await sendRequest(url, ERROR_MESSAGES.TV_FETCH_ERROR);
    const result = TVCrawling(htmlString);
    dispatch(actions.getTVList(result));
  };
};
