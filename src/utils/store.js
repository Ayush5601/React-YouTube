import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import videosSlice from "./videosSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    videos: videosSlice,
    category: categorySlice,
  },
});

export default store;
