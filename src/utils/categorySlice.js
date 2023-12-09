import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryName: "All",
    lastCategoryName: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.categoryName = action.payload;
    },
    setLastCategory: (state, action) => {
      state.lastCategoryName = action.payload;
    },
  },
});

export default categorySlice.reducer;
export const { setCategory, setLastCategory } = categorySlice.actions;
