import React from "react";
import moment from "moment";
import numeral from "numeral";
import useViewsAndDuration from "../utils/useViewsAndDuration";

const VideoResultCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  const { _duration, views } = useViewsAndDuration(info.id?.videoId);

  return (
    <div className="grid grid-flow-col shadow-lg p-2 m-2">
      <div className="flex col-span-2">
        <div className="relative">
          <img
            className="rounded-lg"
            alt="thumbnail"
            src={thumbnails?.medium.url}
          />
          <span className="absolute px-1 right-1 bottom-1 bg-slate-200 rounded-md opacity-75">
            {_duration}
          </span>
        </div>
      </div>
      <div className="col-span-10 px-10">
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>
            <span>{numeral(views).format("0.a")} Views • </span>
            <span>{moment(publishedAt).fromNow()}</span>
          </li>
          <li className="mt-16">{channelTitle}</li>
          {/* <li>{publishTime.split("T")[0]}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default VideoResultCard;
