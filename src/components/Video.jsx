import React from "react";
import Avatar from "react-avatar";
const Video = ({ url = "", title = "", channelName = "" }) => {
  return (
    <div className="w-90 cursor-pointer m-2">
      <img src={url} alt={title} className="w-full rounded-xl hover:brightness-75" />
      <div className="flex mt-2">
        <Avatar
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          size={38}
          round={true}
          
        />
        <div className="ml-2">
          <h1 className="text-gray-900">{title}</h1>
          <p className="text-sm text-gray-600"> {channelName}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
