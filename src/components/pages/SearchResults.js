import { Link, useSearchParams } from "react-router-dom";
import VideoResultCard from "../VideoResultCard";
import useRelatedVideos from "../../utils/useRelatedVideos";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";

const SearchResults = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const relatedVideos = useRelatedVideos(query);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    if (!isMenuOpen) dispatch(toggleMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col">
      {relatedVideos ? (
        relatedVideos.map((video) => (
          <Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
            <VideoResultCard info={video} />
          </Link>
        ))
      ) : (
        <div className="text-5xl">Getting Videos...</div>
      )}
    </div>
  );
};

export default SearchResults;
