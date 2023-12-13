import React from "react";
import moment from "moment";
import numeral from "numeral";
import useViewsAndDuration from "../utils/useViewsAndDuration";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VideoResultCard = ({ info }) => {
  const {
    id,
    snippet: { channelTitle, title, thumbnails, publishedAt },
  } = info;

  const { _duration, views } = useViewsAndDuration(info, id?.videoId);

  return (
    _duration &&
    views && (
      <div className="grid grid-flow-col shadow-lg p-2 m-2">
        <div className="flex col-span-2">
          <div className="relative">
            <LazyLoadImage
              className="rounded-lg"
              alt="thumbnail"
              src={thumbnails?.medium.url}
              effect="blur"
            />
            <span className="absolute px-1 right-1 bottom-2 bg-slate-200 rounded-md opacity-80">
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
    )
  );
};

export default VideoResultCard;
