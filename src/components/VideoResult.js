import React from "react";

const VideoResult = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="grid grid-flow-col shadow-lg p-2 m-2">
      <div className="flex col-span-2">
        <img
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails?.medium.url}
        />
      </div>
      <div className="col-span-10 px-10">
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoResult;
