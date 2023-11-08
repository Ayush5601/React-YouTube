const GOOGLE_API_KEY = "AIzaSyB2aYmsb0nA1cyxyDAcxzo3MiY-eoFOyp4";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key="+
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_RESULTS_API = 
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" +
  GOOGLE_API_KEY + "&q="

// Live Chat >>>> Infinite Scroll >>>>>> Pagination
