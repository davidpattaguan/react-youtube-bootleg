import axios from "axios";

const KEY = "AIzaSyB2_XdN3SlALBARMUsaH5RtgFe43cTNFoo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: KEY,
    q: "surfboards",
    maxResults: 25,
  },
});
