import React from "react";
import ButtonsList from "./buttonsList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const Feed = () => {
 
  const toggle = useSelector(state => state.Toggle.open)
  return (
    <div className={`font-bold border-blue-200 mt-20 ${toggle ? 'w-[85%]': 'w-[95%]'} mr-2 h-full`}>
        <ButtonsList/>
        <VideoContainer/>
    </div>
  );
};

export default Feed;
