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
      const data = await fetch(YOUTUBE_RESULTS_API + query);
      const json = await data.json();
      setRelatedVideos(json?.items);
    };
    getRelatedVidoes();
  }, [query]);

  return relatedVideos;
};

export default useRelatedVideos;

/*
this custom hook can be obselete since we are calling it on some query/category change to return related videos
it is not handling any state that react should know to render itself. Hence it can just be a getRelatedVideos fn

a better way to render popular videos and category videos would be to make a useEffect, call different api's
based on the category type if check and passing category inside the dependency array. Thus seting the videos to
either popular or category based on the returned data (this should be done inside the VideoContainer component)
This is done inside DemoVideoContainer component

but since our serach page is dependent on this hook this cannot be discarded, also it runs whenever a new query
is passed on it's own
*/
