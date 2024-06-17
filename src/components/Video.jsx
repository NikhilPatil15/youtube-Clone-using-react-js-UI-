import axios from "axios";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";

const Video = ({ url = "", title = "", channelName = "", channelId ="" }) => {
  const[icon,setIcon] = useState('')
  const getYoutubeChannel = async()=>{
    try {
      const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${String(import.meta.env.VITE_API_KEY)}`)
      setIcon(response.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    getYoutubeChannel()
  },[])
  return (

    <div className="w-90 cursor-pointer m-2">
      <img src={url} alt={title} className="w-full rounded-xl hover:brightness-75 hover:rounded-none hover:transition-all" />
      <div className="flex mt-2">
        <Avatar
          src={icon}
          size={38}
          round={true}
          className="w-[20%]"
        />
        <div className="ml-4 w-[90%]">
          <h1 className="text-gray-900 text-lg text-pretty tracking-normal">{title}</h1>
          <p className="text-sm text-gray-600"> {channelName}</p>
        </div>
      </div>
    </div>

  );
};

export default Video;
