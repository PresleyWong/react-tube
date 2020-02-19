import axios from "axios";
const KEY = "AIzaSyCgyXhPejzTkUXKMyhzJRKUvdcAzTJ2R5g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 6,
    key: KEY
  }
});
