import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../../utils/appSlice";
import CommentsContainer from "../CommentsContainer";
import LiveChat from "../LiveChat";
import { clearMessages } from "../../utils/chatSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  dispatch(clearMessages());

  return (
    <div className="flex flex-wrap flex-col">
      <div className="flex flex-wrap px-5 ">
        <div className="mb-5 mr-5 w-[70vw] h-[80vh] grow">
          <iframe
            className="rounded-lg"
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grow w-[22rem]">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
