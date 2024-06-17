import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Avatar from "react-avatar";
import { useSelector, useDispatch } from "react-redux";
import { setToggle } from "../redux/Features/ToggleSlice";
import { Link } from "react-router-dom";
import { setCategory } from "../redux/Features/VideoSlice";
import axios from "axios";
import { setSearchSuggestions } from "../redux/Features/SearchSlice";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isSuggestion, setIsSuggestion] = useState(false);
  const [input, setInput] = useState("");
  const toggler = useSelector((state) => state.Toggle.open);
  const searchSuggestions = useSelector(
    (state) => state.Search.searchSuggestions
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setToggle(toggler));
  };

  const LogohandleClick = () => {
    dispatch(setToggle(false));
  };

  const searchVideo = () => {
    dispatch(setCategory(input));
  };

  const searchSuggestion = async () => {
    try {
      const response = await axios.get(
        `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${input}`
      );
      dispatch(setSearchSuggestions(response?.data[1]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchSuggestion();
  }, [input]);

  return (
    <div className="flex justify-center fixed  w-full z-10 bg-white">
      <div className="flex justify-between items-center px-5 w-full relative">
        <div className="flex justify-center items-start gap-4 max-[640px]:gap-3">
          <RxHamburgerMenu
            size={"30px"}
            onClick={handleClick}
            className="cursor-pointer"
          />
          <Link to="/" onClick={LogohandleClick} className="max-[640px]:hidden">
            <img
              src="https://www.shutterstock.com/image-vector/youtube-logo-social-media-icon-260nw-2310134969.jpg"
              alt="Youtube"
              width={"115px"}
              height={"6px"}
              className="m-0 p-0"
            />
          </Link>
        </div>
        <div className="flex items-center w-[40%] max-[640px]:w-full max-[640px]:ml-2">
          <div className="w-[100%]  py-2 justify-center  my-3 px-4 border  border-gray-400 rounded-l-full">
            <input
              onFocus={() => setIsSuggestion(true)}
              type="text"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border:outline-none  w-full focus:outline-none"
            />
          </div>
          <button
            className="rounded-3xl  w-[10%] rounded-l-none h-{42px} border border-gray-400 p-2 px-4 max-[640px]:px-1 max-[1024px]:px-2"
            onClick={searchVideo}
          >
            <IoSearch size={"22px"} />
          </button>
          {isSuggestion && searchSuggestions.length !== 0 && (
            <div className="absolute top-3 z-50 w-[30%] py-5 bg-white shadow-lg mt-12 rounded-lg border border-gray-200 ">
              <ul>
                {searchSuggestions.map((item, index) => {
                  return (
                    <div className="flex items-center px-4 hover:bg-gray-100">
                      <CiSearch size="24px" />
                      <li className="px-2 py-1 cursor-pointer text-md font-medium">
                        {item}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="hidden lg:flex lg:items-center gap-4 mx-6 ">
          <MdOutlineVideoCall size={"30px"} />
          <IoMdNotificationsOutline size={"30px"} />
          <Avatar
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            size={"35px"}
            round="30px"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
