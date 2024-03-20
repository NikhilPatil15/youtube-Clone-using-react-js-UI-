import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Avatar from "react-avatar";
import { GrLike, GrDislike } from "react-icons/gr";
import { IoIosShareAlt } from "react-icons/io";
import { RiDownloadFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "../redux/Features/ChatSlice";

const PlayingVideo = () => {
  const [input, setInput] = useState("");
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("videoId");
  const [video, setVideo] = useState("");
  const dispatch = useDispatch();
  // const [icon, setIcon] = useState("");

  const singleVideo = async () => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setVideo(response.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = () => {
    dispatch(setMessage({ name: "Nikhil", message: input }));
    setInput("");
  };

  // const getYoutubeChannel = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video?.snippet?.channelId}&key=${import.meta.env.VITE_API_KEY}`);
  //     console.log(response.data);
  //     // setIcon(response.data.items[0]?.snippet?.thumbnails.high.url);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    singleVideo();
    // getYoutubeChannel();
  }, []);

  return (
    <div className="mt-20 ml-72 w-full flex">
      <div className="flex w-[75%]">
        <div>
          <iframe
            width="900px"
            height="500px"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h1 className="text-xl font-bold">{video?.snippet?.title}</h1>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center justify-between w-[35%]">
              <div className="flex gap-2 w-[70%]">
                <Avatar
                  src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  size={38}
                  round={true}
                  className="w-[50%]"
                />
                <h1 className="text-lg font-semibold">
                  {video?.snippet?.channelTitle}
                </h1>
              </div>
              <button className="cursor-pointer px-4 py-1 bg-black text-white rounded-full font-medium">
                Subscribe
              </button>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center bg-gray-200 rounded-full px-4 py-2 cursor-pointer gap-2 hover:bg-gray-300">
                <GrLike size={"20px"} className="mr-2" />
                <GrDislike size={"20px"} className="ml-2" />
              </div>
              <div className="flex items-center bg-gray-200 rounded-full px-4 py-1 cursor-pointer gap-2 hover:bg-gray-300">
                <IoIosShareAlt size={"20px"} />
                <span>Share</span>
              </div>
              <div className="flex items-center bg-gray-200 rounded-full px-4 py-1 cursor-pointer gap-2 hover:bg-gray-300">
                <RiDownloadFill size={"20px"} />
                <span>Download</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-r border-l border border-gray-300 w-full mr-2 ml-2 h-fit rounded-lg">
        <div className="flex justify-between items-center border border-b-gray-300">
          <h1 className="text-xl p-2 font-bold">Live Chat</h1>
          <BsThreeDotsVertical size={"25px"} />
        </div>

        <div className="overflow-y-auto h-[41.5rem] flex flex-col-reverse ml-2">
          <LiveChat />
        </div>

        <div className="border border-t-gray-300 flex justify-between items-center ">
          <div className="flex items-center w-[90%] p-2 gap-2">
            <div>
              <Avatar
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                size={30}
                round={true}
                className="w-[50%]"
              />
            </div>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Type Message"
              className="border-b border-gray-300 rounded-lg focus:outline-none w-full text-xl "
            />
            <div className="rounded-full bg-gray-300 p-2 cursor-pointer">
              <VscSend size={20} onClick={sendMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingVideo;
