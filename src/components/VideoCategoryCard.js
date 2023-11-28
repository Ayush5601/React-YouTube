import numeral from "numeral";
import moment from "moment";
import useViewsAndDuration from "../utils/useViewsAndDuration";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VideoCategoryCard = ({ info, id }) => {
  const { channelTitle, title, thumbnails, publishedAt } = info.snippet;

  const { _duration, views } = useViewsAndDuration(id);

  if (!_duration && !views) return null;

  return (
    <div className="p-2 m-2 w-[19rem] shadow-lg">
      <div className="relative">
        <LazyLoadImage
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails?.medium.url}
          effect="blur"
        />
        <span className="absolute px-1 right-1 bottom-2 bg-slate-200 rounded-md opacity-80">
          {_duration}
        </span>
      </div>
      <ul>
        <li className="font-bold py-2">
          {title.length > 50 ? title.substring(0, 50) + "..." : title}
        </li>
        <li>
          <span>{numeral(views).format("0.a")} Views • </span>
          <span>{moment(publishedAt).fromNow()}</span>
        </li>
        <li>{channelTitle}</li>
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
