import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
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
esc keypress to hide suggestions

  onKeyDown={(e) => {
    if (e.key === "Escape" && !isSuggestionClose) {
      dispatch(closeSuggestions()); 
    }
  }};
*/
