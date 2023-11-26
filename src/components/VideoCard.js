import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_METADATA_API } from "../utils/contants";

const VideoCard = ({ info, id }) => {
  const { channelTitle, title, thumbnails } = info.snippet;
  const [duration, setDuration] = useState(null);
  const [views, setViews] = useState(null);

  useEffect(() => {
    const getVideoMetaData = async () => {
      const data = await fetch(
        "https://corsproxy.io/?" + YOUTUBE_VIDEO_METADATA_API + id
      );
      const json = await data.json();
      const items = json.items[0];
      console.log(items);

      setDuration(items.contentDetails.duration);
      setViews(items.statistics.viewCount);
    };
    getVideoMetaData();
  }, [id]);

  return (
    <div className="p-2 m-2 w-[18rem] shadow-lg">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{views} views</li>
        <li>{duration} duration</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;

/*
this was previosuly a state less component which just displayed video info passed as props
but since the video_search api does not have the duration and view details we have to make an extra api call
and make this component handle these states
*/
