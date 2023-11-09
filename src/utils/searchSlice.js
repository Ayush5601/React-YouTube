import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    suggestionObj : {},
    isClose: true
  },
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
      state.isClose = false;
    },
    closeSuggestions: (state) =>{
      state.isClose = true;
    }
  },
});

export const { cacheResults, closeSuggestions } = searchSlice.actions;

export default searchSlice.reducer;
