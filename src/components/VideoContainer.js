import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch("https://corsproxy.io/?" + YOUTUBE_VIDEOS_API);
    const json = await data.json();

    setVideos(json.items);
  };

  if (videos == null) return null;

  return (
    <div className="flex flex-wrap">
      {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
