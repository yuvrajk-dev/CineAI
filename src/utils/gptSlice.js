import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    title: "EN",
    lang: "en",
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { toggleGptSearchView, changeTitle, changeLang } =
  gptSlice.actions;
export default gptSlice.reducer;
