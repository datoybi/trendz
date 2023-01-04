import axios from "axios";
import * as cheerio from "cheerio";
import { actions } from "./slice";

const GOOGLE_TRENDS_URL = "/trends/trendingsearches/daily/rss?geo=KR";
const TOP_NEWS_URL = "/mostread.json";
const YOUTUBE_URL = "/youtube-video-rank/top-kr-all-video-day";
const YOUTUBE_SECOND_URL =
  "/youtube-video-rank/_top-videos?country=kr&category=all&offset=5&pageSize=7";
const SONG_URL = "/chart/";
const MAX_SONG = 20;
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
      const $ = cheerio.load(htmlString);
      const result = [];

      $("item").each(function (_, el) {
        const pubDate = $(el).children("pubDate").text();
        const keyword = $(el).children("title").text();
        const traffic = $(el).children("ht\\:approx_traffic").text();
        const news = [];

        $(el)
          .children("ht\\:news_item")
          .each(function (index) {
            if (index >= 2) return;
            const title = $(this).children("ht\\:news_item_title").text();
            const url = $(this).children("ht\\:news_item_url").text();
            const source = $(this).children("ht\\:news_item_source").text();
            news.push({ title, url, source });
          });
        result.push({ pubDate, keyword, traffic, news });
      });

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
      const result = Object.entries(records).reduce((acc, [_, value], index) => {
        if (index >= 8) return acc;
        const { promo } = value;
        const { shortHeadline } = promo.headlines;
        const { assetUri } = promo.locators;
        return [...acc, [shortHeadline, assetUri]];
      }, []);

      dispatch(actions.getNews(result));
    } catch (error) {
      console.log(error || "Something went wrong");
      // 나중에 에러처리도 해주기
    }
  };
};

const youtubeLoop = (selector, $) => {
  let newResult = [];
  selector.each(function (_, el) {
    const videoId = $(el).find(".youtube-video-wrapper").attr("data-video-id");
    const imgURL = $(el).find("img").attr("src");
    const title = $(el).find(".video-title").last().attr("title");
    const host = $(el).find(".video-data > .name").text();
    const view = $(el).find(".detail-data.view").text();

    newResult = [
      ...newResult,
      {
        imgURL,
        videoId,
        title,
        host,
        view,
      },
    ];
  });
  return newResult;
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
      const $ = cheerio.load(htmlString);

      const firstVideo = $("#number-one-video");
      const firstImgURL = firstVideo.find("img").attr("src");
      const firstVideoId = firstVideo.find(".youtube-video-wrapper").attr("data-video-id");
      const firstTitle = firstVideo.find(".video-title").attr("title");
      const firstHost = firstVideo.find(".detail-data.name").attr("title");
      const firstView = firstVideo.find(".detail-data.view").text();

      let result = [
        {
          imgURL: firstImgURL,
          videoId: firstVideoId,
          title: firstTitle,
          host: firstHost,
          view: firstView,
        },
      ];

      const newResult = youtubeLoop($("#ranking-videos > li"), $);
      result = [...result, ...newResult];

      const secondHtmlString = await fetchSecondHTML();
      const $$ = cheerio.load(secondHtmlString);
      const newSecondResult = youtubeLoop($$("#ranking-videos > li"), $$);
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
      const $ = cheerio.load(htmlString);
      const result = [];

      $(".service_list_song .lst50").each(function (index, el) {
        if (index >= MAX_SONG) return;
        const album = $(el).find("a:eq(0)").attr("title"); // 엘범명
        const title = $(el).find(".ellipsis:eq(0)").text().trim(); // 노래명
        const singer = $(el).find("a:eq(3)").text(); // 가수
        result.push({ album, title, singer });
      });
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
      // console.log(htmlString);
      const $ = cheerio.load(htmlString);
      const result = [];

      $(".list_movieranking > li").each(function (_, el) {
        const posterURL = $(el).find(".poster_movie > img").attr("src");
        const URL = $(el).find(".poster_info > a").attr("href");
        const title = $(el).find(".tit_item > a").text();
        const rate = $(el).find(".txt_grade").text();

        result.push({ posterURL, URL, title, rate });
      });

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
      const $ = cheerio.load(htmlString);
      const result = [];

      $(".tb_list > tbody tr").each(function (_, el) {
        const title = $(el).find("a").first().text();
        const cast = $(el).find("a:eq(1)").text();
        const rate = $(el).find(".rate").text();
        const url = $(el).find("a").first().attr("href");

        result.push({ title, cast, rate, url });
      });

      dispatch(actions.getTVList(result));
    } catch (error) {
      console.log(error || "Something went wrong");
      // 나중에 에러처리도 해주기
    }
  };
};
