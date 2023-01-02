import { createSlice } from "@reduxjs/toolkit";
import { LOADING_KEYWORD_COUNT } from "../constants/trendz";

const slice = createSlice({
  name: "trend",
  initialState: {
    keywords: [],
    paged: LOADING_KEYWORD_COUNT,
    news: [],
  },

  reducers: {
    getKeyWord(state, action) {
      state.keywords = action.payload;
    },

    increasePage(state) {
      // 나중에 페이징 다시 해보기
      const newPaged = state.paged * 2;
      state.paged =
        state.keywords.length < newPaged ? state.keywords.length : newPaged;
    },

    getNews(state, action) {
      state.news = action.payload;
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
