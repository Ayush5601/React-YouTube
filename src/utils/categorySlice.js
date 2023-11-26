import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryName: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.categoryName = action.payload;
    },
  },
});

export default categorySlice.reducer;
export const { setCategory } = categorySlice.actions;
