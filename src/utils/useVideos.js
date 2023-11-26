import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "./contants";
import { setCurrentVideos } from "./videosSlice";

const useVideos = () => {
  const dispatch = useDispatch();
  const currentVideos = useSelector((store) => store.videos?.currentVideos);

  useEffect(() => {
    !currentVideos && getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch("https://corsproxy.io/?" + YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(setCurrentVideos(json.items));
  };
};

export default useVideos;
