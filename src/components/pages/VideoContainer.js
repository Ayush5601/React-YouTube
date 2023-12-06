import VideoCard from "../VideoCard";
import { Link } from "react-router-dom";
import useRelatedVideos from "../../utils/useRelatedVideos";
import VideoCategoryCard from "../VideoCategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";
import { useEffect } from "react";

const VideoContainer = () => {
  const dispatch = useDispatch();

  var popularVideos = useSelector((store) => store.videos?.currentVideos);

  var category = useSelector((store) => store.category?.categoryName);

  if (category === "All" || !category) category = "";

  const categoryVideos = useRelatedVideos(category);

  const videos = !categoryVideos ? popularVideos : categoryVideos;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    if (!isMenuOpen) dispatch(toggleMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !videos ? (
    <div className="text-5xl">Loading....</div>
  ) : (
    <>
      <div className="flex flex-wrap">
        {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
        {videos.map((video, index) =>
          !category ? (
            <Link key={index} to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          ) : (
            <Link key={index} to={"/watch?v=" + video.id.videoId}>
              <VideoCategoryCard info={video} id={video.id.videoId} />
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default VideoContainer;

/*
the popularVideos and categoryVideos have video id in a different format, thus have to handle using '||'
need to handle efficiently--> on going back to 'All' categories, the popular videos should display again

this page can use <Outlet/> since we are displaying homePage videos and categoryVideos over here by separate
API calls. Now on each render both popular and category call is made
*/
