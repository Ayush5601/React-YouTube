import { useEffect, useState } from "react";
import { YOUTUBE_RESULTS_API } from "../utils/contants";

const useRelatedVideos = (query) => {
    const [relatedVideos, setRelatedVideos] = useState(null);

    useEffect(()=>{
        getRelatedVidoes(); 
    }, [query]);

    const getRelatedVidoes = async () =>{
        if(query?.trim().length === 0) return;
        
        const data = await fetch(YOUTUBE_RESULTS_API+ query);
        const json = await data.json();
        console.log(json)
        setRelatedVideos(json?.items);
    }

    return relatedVideos;
}

export default useRelatedVideos;