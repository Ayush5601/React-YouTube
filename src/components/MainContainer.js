import React from "react";
import CategoryList from "./CategoryList";
// import VideoContainer from "./pages/VideoContainer";
import OptimisedVideoContainer from "./OptimisedVideoContainer";
// import useVideos from "../utils/useVideos";

const MainContainer = () => {
  // useVideos();
  return (
    <div className="">
      <CategoryList />
      {/* <VideoContainer/> */}
      <OptimisedVideoContainer />
    </div>
  );
};

export default MainContainer;
