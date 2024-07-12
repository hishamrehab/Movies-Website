import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
  name: "generaOrCategory",
  initialState: {
    generaOrCategoryName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.generaOrCategoryName = action.payload;
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;
