import numeral from "numeral";
import moment from "moment";
import useViewsAndDuration from "../utils/useViewsAndDuration";

const VideoCard = ({ info, id }) => {
  const { channelTitle, title, thumbnails, publishedAt } = info.snippet;

  const { _duration, views } = useViewsAndDuration(id);

  console.log(views);

  return (
    <div className="p-2 m-2 w-[18rem] shadow-lg">
      <div className="relative">
        <img
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails?.medium.url}
        />
        <span className="absolute px-1 right-1 bottom-1 bg-slate-200 rounded-md opacity-75">
          {_duration !== "00:00" && _duration}
        </span>
      </div>
      <ul>
        <li className="font-bold py-2">
          {title.length > 50 ? title.substring(0, 50) + "..." : title}
        </li>
        <li>
          <span>{views !== null && numeral(views).format("0.a")} Views • </span>
          <span>{moment(publishedAt).fromNow()}</span>
        </li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;

/*
this was previosuly a state less component which just displayed video info passed as props
but since the video_search api does not have the duration and view details we have to make an extra api call
and make this component handle these states
*/
