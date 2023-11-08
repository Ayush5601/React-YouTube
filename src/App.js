import { Provider } from "react-redux";
import "./App.css";
import {Outlet } from "react-router-dom";
import Head from "./components/Head";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Outlet />

        {/**
         *
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonsList
         *    VideoContainer
         *      VideoCard
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
