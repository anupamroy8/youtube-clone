const YOUTUBE_API_KEY = "AIzaSyDTfKS8iyeaqmLDCYfpGP-fEVSuzlbUNj8";

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;
