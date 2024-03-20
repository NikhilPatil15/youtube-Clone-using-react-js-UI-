import React, { useEffect, useState } from "react";
import axios from "axios";
import Video from "./Video";
import { useSelector,useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setToggle } from '../redux/Features/ToggleSlice'
const VideoContainer = () => {
  //WHENEVER YOU ARE CALLING AN API DO IT WITHIN USEEFFECT
  const [data, setData] = useState([]);
  const { videoId } = useParams();
  const toggle = useSelector((state) => state.Toggle.open);
  console.log(toggle);
  const dispatch = useDispatch();
  const fetchVideos = async () => {
    try {
      const res = await axios.get(String(import.meta.env.VITE_VIDEO_URL));
      console.log(res?.data?.items);
      setData(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleClick = ()=>{
      dispatch(setToggle(false))
  }

  return (
    <div
      className={`grid ${
        toggle ? "grid-cols-3 gap-3" : "grid-cols-4 gap-4"
      }   m-4 mt-10`}
    >
      {data.map((video, index) => (
        <Link key={video.id} to={`/video?videoId=${video.id}`} onClick={handleClick}>
          <Video
            url={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
            channelName={video.snippet.channelTitle}
            channelId={video.snippet.channelId}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
