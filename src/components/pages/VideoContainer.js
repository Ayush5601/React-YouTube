import VideoCard from "../VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useRelatedVideos from "../../utils/useRelatedVideos";
import VideoCategoryCard from "../VideoCategoryCard";

const VideoContainer = () => {
  const popularVideos = useSelector((store) => store.videos?.currentVideos);
  var category = useSelector((store) => store.category?.categoryName);
  if (category === "All") category = "";
  const categoryVideos = useRelatedVideos(category);

  const videos = !categoryVideos ? popularVideos : categoryVideos;

  if (videos == null) return null;

  return (
    <div className="flex flex-wrap">
      {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
      {videos.map((video) => (
        <Link
          key={video.id?.videoId || video.id}
          to={"/watch?v=" + video.id?.videoId || video.id}
        >
          {!category ? (
            <VideoCard info={video} />
          ) : (
            <VideoCategoryCard
              info={video}
              id={video.id?.videoId || video.id}
            />
          )}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

/*
the popularVideos and categoryVideos have video id in a different format, thus have to handle using '||'
need to handle efficiently--> on going back to 'All' categories, the popular videos should display again

this page can use <Outlet/> since we are displaying homePage videos and categoryVideos over here by separate
API calls. Now on each render both popular and category call is made
*/
