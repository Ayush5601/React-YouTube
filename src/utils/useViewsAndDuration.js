import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_METADATA_API } from "./contants";
import moment from "moment";

const useViewsAndDuration = (info, id) => {
  const [duration, setDuration] = useState(null);
  const [views, setViews] = useState(null);

  useEffect(() => {
    const getVideoMetaData = async () => {
      //optimization to prevent api calls for popular videos
      if (id) {
        const data = await fetch(YOUTUBE_VIDEO_METADATA_API + id);
        const json = await data.json();
        const items = json?.items[0];

        setDuration(items?.contentDetails.duration);
        setViews(items?.statistics.viewCount);
      } else {
        setDuration(info.contentDetails?.duration);
        setViews(info.statistics?.viewCount);
      }
    };
    getVideoMetaData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  //using compution logic here to free video card component to just render jsx
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return { _duration, views };
};

export default useViewsAndDuration;
