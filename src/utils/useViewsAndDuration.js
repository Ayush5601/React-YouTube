import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_METADATA_API } from "./contants";
import moment from "moment";

const useViewsAndDuration = (id) => {
  const [duration, setDuration] = useState(null);
  const [views, setViews] = useState(null);

  useEffect(() => {
    const getVideoMetaData = async () => {
      const data = await fetch(
        "https://corsproxy.io/?" + YOUTUBE_VIDEO_METADATA_API + id
      );
      const json = await data.json();
      const items = json?.items[0];

      // console.log(json);
      setDuration(items?.contentDetails.duration);
      setViews(items?.statistics.viewCount);
    };
    getVideoMetaData();
  }, [id]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return { _duration, views };
};

export default useViewsAndDuration;
