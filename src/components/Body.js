import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import useVideos from "../utils/useVideos";

const Body = () => {
  useVideos();

  return (
    <div className="flex">
      <aside className="sticky top-0">
        <Sidebar />
      </aside>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Body;

/*
  onKeyDown={(e) => {
    if (e.key === "Escape" && !isSuggestionClose) {
      dispatch(closeSuggestions()); 
    }
  }};
*/
