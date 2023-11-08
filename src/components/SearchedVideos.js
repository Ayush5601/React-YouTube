import { Link, useSearchParams } from "react-router-dom";
import VideoResult from "./VideoResult";
import useRelatedVideos from "../utils/useRelatedVideos";

const SearchResults = () =>{
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q');

    const relatedVideos = useRelatedVideos(query);
    
    return (
        <div className="flex flex-col">
        {relatedVideos ? relatedVideos.map((video) => (
            <Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
                <VideoResult info={video} />   
            </Link>
        ))      
         :
        <div className="text-5xl bg-red-400">No results found</div>
        }
        </div>
    );
}

export {SearchResults};

/*
side bar automatic collapsing
esc keypress to hide suggestions
enter keypress for search
*/
