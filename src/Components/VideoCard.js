import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return "Loading";
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        src={info.snippet.thumbnails.medium.url}
        alt="thumbnails"
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold">{info.snippet.title}</li>
        <li className="font-extrabold  ">{info.snippet.channelTitle}</li>
        <li>{info.statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
