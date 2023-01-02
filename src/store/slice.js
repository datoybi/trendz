import { createSlice } from "@reduxjs/toolkit";
import { LOADING_KEYWORD_COUNT } from "../constants/trendz";

const slice = createSlice({
  name: "trend",
  initialState: {
    keywords: [],
    paged: LOADING_KEYWORD_COUNT,
  },

  reducers: {
    replaceKeyWord(state, action) {
      state.keywords = action.payload;
    },

    increasePage(state) {
      const newPaged = state.paged * 2;
      state.paged =
        state.keywords.length < newPaged ? state.keywords.length : newPaged;
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
