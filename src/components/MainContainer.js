import React from "react";
import CategoryList from "./CategoryList";
import VideoContainer from "./pages/VideoContainer";

const MainContainer = () => {
  return (
    <div className="">
      <CategoryList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
