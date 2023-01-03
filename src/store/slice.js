import { createSlice } from "@reduxjs/toolkit";
import { LOADING_KEYWORD_COUNT } from "../constants/trendz";

const MULTIPLY_LENGTH = 2;

const slice = createSlice({
  name: "trend",
  initialState: {
    keywords: [],
    keywordCount: LOADING_KEYWORD_COUNT,
    news: [],
  },

  reducers: {
    getKeyWord(state, action) {
      state.keywords = action.payload;
    },

    increaseKeywordCount(state) {
      const newCount = state.keywordCount * MULTIPLY_LENGTH;
      const totalKeyword = state.keywords.length;
      state.keywordCount = totalKeyword < newCount ? totalKeyword : newCount;
    },

    getNews(state, action) {
      state.news = action.payload;
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
