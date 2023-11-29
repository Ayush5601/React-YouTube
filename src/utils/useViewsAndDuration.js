import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_METADATA_API } from "./contants";

const useViewsAndDuration = (id) => {
  const [duration, setDuration] = useState(null);
  const [views, setViews] = useState(null);

  useEffect(() => {
    const getVideoMetaData = async () => {
      const data = await fetch(YOUTUBE_VIDEO_METADATA_API + id);
      const json = await data.json();
      const items = json?.items[0];

      setDuration(items?.contentDetails.duration);
      setViews(items?.statistics.viewCount);
    };
    getVideoMetaData();
  }, [id]);

  return { duration, views };
};

export default useViewsAndDuration;
