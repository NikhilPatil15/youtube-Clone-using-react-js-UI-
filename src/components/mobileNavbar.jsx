import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { setCategory } from "../redux/Features/VideoSlice";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "../redux/Features/ToggleSlice";

const MobileNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const list = [
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span>Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span>Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },
  ];
  return (
    <div className="w-full overflow-hidden relative z-40 ml-0 p-20 top-20 right-1 bg-transparent ">
      <div className="w-full h-full  flex flex-col justify-evenly items-start gap-20">
        <Link to="/">
          <img
            src="https://www.shutterstock.com/image-vector/youtube-logo-social-media-icon-260nw-2310134969.jpg"
            alt="Youtube"
            width={"200px"}
            height={"50px"}
            className="m-0 p-0"
          />
        </Link>
        <div className="flex flex-col gap-6 justify-center  cursor-pointer">
          {list.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 justify-start "
            >
              {item.icons}
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
