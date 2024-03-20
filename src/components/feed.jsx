import React from "react";
import ButtonsList from "./buttonsList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const Feed = () => {
 
  const toggle = useSelector(state => state.Toggle.open)
  return (
    <div className={` z-0 relative font-bold border-blue-200 mt-16 ${toggle ? 'w-[85%]': 'w-[95%]'} mr-2 h-[100vh] ${toggle ? 'ml-72': 'ml-24'}`}>
        <ButtonsList/>
        <VideoContainer/>
    </div>
  );
};

export default Feed;
