import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
    <aside class="h-screen sticky top-0">
        <Sidebar />
    </aside>
    <main>
      <Outlet />
    </main>
    </div>
  );
};

export default Body;
