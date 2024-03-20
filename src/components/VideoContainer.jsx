import React, { useEffect, useState } from "react";
import axios from "axios";
import Video from "./Video";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setToggle } from "../redux/Features/ToggleSlice";
import { setVideo } from "../redux/Features/VideoSlice";
import { ShimmerPostList, ShimmerThumbnail } from "react-shimmer-effects";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
const VideoContainer = () => {
  //WHENEVER YOU ARE CALLING AN API DO IT WITHIN USEEFFECT
  const [isLoading, setIsloading] = useState(true);
  const { video, category } = useSelector((state) => state.Video);
  const toggle = useSelector((state) => state.Toggle.open);

  const dispatch = useDispatch();

  const fetchVideos = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_VIDEO_URL);

      dispatch(setVideo(res?.data?.items));
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const searchByCategory = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${
          import.meta.env.VITE_API_KEY
        }`
      );

      dispatch(setVideo(response?.data?.items));
      setIsloading(false);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchVideos();
      searchByCategory();
    }, 1000);
  }, [category,isLoading]);

  const handleClick = () => {
    dispatch(setToggle(false));
  };

  if (isLoading)
    return (
      <div className={`grid ${toggle ? "grid-cols-3 gap-3" : "grid-cols-4 gap-4"}  m-4 mt-14`}>
        {Array.from({ length: video.length }).map((item, index) => {
          return (
            <div className="w-full" key={index}>
              <ShimmerThumbnail height={300} width={400} rounded />
            </div>
          );
        })}
      </div>
    );
  else
    return (
      <div
        className={`grid ${
          toggle ? "grid-cols-3 gap-3" : "grid-cols-4 gap-4"
        }  m-4 mt-14`}
      >
        {video.map((video, index) => (
          <Link
            key={index}
            to={`/video?videoId=${
              typeof video.id === "object" ? video.id.videoId : video.id
            }`}
            onClick={handleClick}
          >
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
