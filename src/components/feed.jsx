import React from "react";
import ButtonsList from "./buttonsList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import MobileNavbar from "./mobileNavbar";

const Feed = () => {
  const toggle = useSelector((state) => state.Toggle.open);
  console.log(toggle);

  return (
    <div
      className={` z-0 relative font-bold border-blue-200 mt-16 ${
        toggle ? "w-[85%]" : "w-[95%]  "
      } mr-2 h-[100vh] ${
        toggle ? "ml-72 max-[640px]:ml-28 " : "ml-24 max-[640px]:ml-28"
      }`}
    >
      <ButtonsList />
      <div className={`md:hidden ${toggle && "max-[640px]:visible"}`}>
        {toggle && <MobileNavbar />}
      </div>
      <VideoContainer />
    </div>
  );
};

export default Feed;
