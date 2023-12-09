import numeral from "numeral";
import moment from "moment";
import useViewsAndDuration from "../utils/useViewsAndDuration";
import { AiFillEye } from "react-icons/ai";

const VideoCategoryCard = ({ info }) => {
  const {
    id,
    snippet: { channelTitle, title, thumbnails, publishedAt },
  } = info;

  const _videoId = id?.videoId || id;

  const { _duration, views } = useViewsAndDuration(info, _videoId);

  return (
    <div className="p-2 m-2 w-[19rem] shadow-lg grow">
      <div className="relative">
        <img
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails?.medium.url}
        />
        <span className="absolute px-1 right-1 bottom-1 bg-slate-200 rounded-md opacity-80">
          {_duration}
        </span>
      </div>
      <ul>
        <li className="font-bold py-2">
          {title.length > 50 ? title.substring(0, 50) + "..." : title}
        </li>
        <li>
          <div className="flex">
            <span className="mt-1 mr-1">
              <AiFillEye />
            </span>
            <span>{numeral(views).format("0.a")} Views •</span>
            <span className="ml-1">{moment(publishedAt).fromNow()}</span>
          </div>
        </li>
        <li className="text-slate-600">{channelTitle}</li>
      </ul>
    </div>
  );
};

export default VideoCategoryCard;

/*
this was previosuly a state less component which just displayed video info passed as props
but since the video_search api does not have the duration and view details we have to make an extra api call
and make this component handle these states

made this component separately since it had an additional api call that home videos did not require
*/
