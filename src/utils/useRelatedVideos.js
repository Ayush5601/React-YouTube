import { useEffect, useState } from "react";
import { YOUTUBE_RESULTS_API } from "../utils/contants";

const useRelatedVideos = (query) => {
  const [relatedVideos, setRelatedVideos] = useState(null);

  useEffect(() => {
    const getRelatedVidoes = async () => {
      if (query?.trim().length === 0) {
        //cleaning up old set category video
        setRelatedVideos(null);
        return;
      }
      const data = await fetch(
        "https://corsproxy.io/?" + YOUTUBE_RESULTS_API + query
      );
      const json = await data.json();
      setRelatedVideos(json?.items);
    };
    getRelatedVidoes();
  }, [query]);

  return relatedVideos;
};

export default useRelatedVideos;
