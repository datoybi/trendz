import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "trend",
  initialState: {
    keywords: [],
  },
  reducers: {
    replaceKeyWord(state, action) {
      state.keywords = action.payload;
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
