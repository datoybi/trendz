import { actions } from "./slice";
import * as cheerio from "cheerio";
import axios from "axios";

const API_URL = "/trends/trendingsearches/daily/rss?geo=KR";

export const fetchKeyword = () => {
  return async (dispatch) => {
    const fetchHTML = async () => {
      const { data } = await axios.get(API_URL);

      if (!data) {
        throw new Error("Could not fetch data!");
      }
      return data;
    };

    try {
      const htmlString = await fetchHTML();
      const $ = cheerio.load(htmlString);
      const result = [];

      $("item").each(function (index, el) {
        const pubDate = $(el).children("pubDate").text();
        const keyword = $(el).children("title").text();
        const traffic = $(el).children("ht\\:approx_traffic").text();
        // console.log(`${pubDate} \t ${keyword} \t ${traffic}`);

        const news = [];
        $(el)
          .children("ht\\:news_item")
          .each(function (index) {
            if (index < 2) {
              const title = $(this).children("ht\\:news_item_title").text();
              const url = $(this).children("ht\\:news_item_url").text();
              const source = $(this).children("ht\\:news_item_source").text();
              news.push({ title, url, source });
            }
          });
        result.push({ pubDate, keyword, traffic, news });
      });
      // console.log(JSON.stringify(result, null, 2));

      dispatch(actions.replaceKeyWord(result));
    } catch (error) {
      console.log(error || "Something went wrong");
    }
  };
};
