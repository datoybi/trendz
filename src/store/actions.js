import axios from "axios";
import * as cheerio from "cheerio";
import { actions } from "./slice";

const GOOGLE_TRENDS_URL = "/trends/trendingsearches/daily/rss?geo=KR";
const TOP_NEWS_URL = "/mostread.json";

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
