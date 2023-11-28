import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Demo from "./components/DemoUseMemo";
import Demo2 from "./components/DemoUseRef";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/pages/WatchPage";
import SearchResults from "./components/pages/SearchResults";
import "react-lazy-load-image-component/src/effects/blur.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "watch",
            element: <WatchPage />,
          },
          {
            path: "demo",
            element: (
              <>
                <Demo />
                <Demo2 />
              </>
            ),
          },
          {
            path: "search",
            element: <SearchResults />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
