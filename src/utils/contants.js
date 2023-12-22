const GOOGLE_API_KEY = "AIzaSyB2aYmsb0nA1cyxyDAcxzo3MiY-eoFOyp4";
// const GOOGLE_API_KEY = "AIzaSyBP3rUzeBj0BtDauNlr_5qgXT9-Gscq1c0";

export const LIVE_CHAT_COUNT = 25;

export const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

const MAX = 16;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=" +
  MAX +
  "&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=" +
  MAX +
  "&type=video&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const YOUTUBE_VIDEO_METADATA_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const YOUTUBE_CHANNEL_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&forUsername=";

// Live Chat >>>> Infinite Scroll >>>>>> Pagination
