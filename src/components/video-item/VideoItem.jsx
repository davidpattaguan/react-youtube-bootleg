import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="flex mt-3 w-96" onClick={() => onVideoSelect(video)}>
      <div className="">
        <img
          className="p-1 rounded max-w-xl"
          src={video.snippet.thumbnails.default.url}
          alt=""
        />
      </div>

      <div>
        <div className="ml-1">
          <h1 className="font-semibold text-md text-white ">
            {video.snippet.title}
          </h1>
          <h4 className="text-gray-400 text-xs mt-1">
            {video.snippet.channelTitle}
          </h4>
        </div>
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
