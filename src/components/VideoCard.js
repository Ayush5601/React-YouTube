import numeral from "numeral";
import moment from "moment";

const VideoCard = ({ info }) => {
  const { channelTitle, title, thumbnails, publishedAt } = info.snippet;

  const duration = info.contentDetails?.duration;
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const views = info.statistics?.viewCount;

  return (
    <div className="p-2 m-2 w-[19rem] shadow-lg">
      <div className="relative">
        <img
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails?.medium.url}
        />
        <span className="absolute px-1 right-1 bottom-1 bg-slate-200 rounded-md opacity-80">
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
