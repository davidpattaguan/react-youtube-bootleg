import React from "react";
import VideoItem from "../video-item/VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  console.log(videos);
  return (
    <div>
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoSelect={onVideoSelect}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
