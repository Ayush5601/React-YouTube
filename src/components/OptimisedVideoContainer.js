import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_RESULTS_API, YOUTUBE_VIDEOS_API } from "../utils/contants";
import { setCurrentVideos } from "../utils/videosSlice";
import VideoCategoryCard from "./VideoCategoryCard";
// import { useState } from "react";

const OptimisedVideoContainer = () => {
  const dispatch = useDispatch();

  var category = useSelector((store) => store.category?.categoryName);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const videos = useSelector((store) => store.videos?.currentVideos);

  //   const [videos, setVideos] = useState();

  useEffect(() => {
    if (!isMenuOpen) dispatch(toggleMenu());

    const getVideos = async () => {
      let url;
      if (category && category !== "All") {
        url = YOUTUBE_RESULTS_API + category;
      } else {
        url = YOUTUBE_VIDEOS_API;
      }
      const data = await fetch(url);
      const json = await data.json();

      dispatch(setCurrentVideos(json.items));

      //   setVideos(json.items);
    };

    getVideos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  // console.log(videos);

  return !videos ? (
    <div className="text-5xl">Loading....</div>
  ) : (
    <>
      <div className="flex flex-wrap">
        {videos.map((video) => (
          <Link
            key={video.id?.videoId || video.id}
            to={"/watch?v=" + video.id?.videoId || video.id}
          >
            <VideoCategoryCard info={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default OptimisedVideoContainer;

/*
this is an optimised version of videoContainer component, since it uses a 
1. single type of video card
2. it updates the videos only when needed by making respected api calls
3. it updates the category videos as well inside redux store, enabling lesser api calls when going back-forth 

only the additional api call to get video meta data will be made each time
*/

//another logic to fetch and update videos
// if (category && category !== "All") {
//   getRelatedVideos(category).then((response) => setVideos(response));

//   // (async () => {
//   //   const val = await getRelatedVideos(category);
//   //   setVideos(val);
//   // })();
// } else {
//   getPopularVideos().then((response) => setVideos(response));
// }
