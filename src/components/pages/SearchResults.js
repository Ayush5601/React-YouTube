import { Link, useSearchParams } from "react-router-dom";
import VideoResultCard from "../VideoResultCard";
import useRelatedVideos from "../../utils/useRelatedVideos";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const relatedVideos = useRelatedVideos(query);

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

/*
side bar automatic collapsing
esc keypress to hide suggestions
*/
