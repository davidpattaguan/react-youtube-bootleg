import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="text-xl font-semibold text-white">Loading...</div>;
  }

  console.log(video);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className>
      <div className="h-5/6">
        <iframe
          className="md:w-full w-[28rem] md:h-[38rem] h-[12rem]"
          src={videoSrc}
        ></iframe>
      </div>
      <div className="mt-5">
        <h1 className="text-white font-semibold text-xl">
          {video.snippet.title}
        </h1>
        <h3 className="text-white font-light text-md">
          By: {video.snippet.channelTitle}
        </h3>
        <br></br>
        <hr></hr>
      </div>
    </div>
  );
};

export default VideoDetail;
