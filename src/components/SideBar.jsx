import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
const SideBar = () => {
  const list = [
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <h1 className="text-lg">Home</h1>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <h1 className="text-lg">Shorts</h1>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <h1 className="text-lg">Subscription</h1>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <h1 className="text-lg">Home</h1>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <h1 className="text-lg">Shorts</h1>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <h1 className="text-lg">Subscription</h1>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <h1 className="text-lg">Home</h1>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <h1 className="text-lg">Shorts</h1>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <h1 className="text-lg">Subscription</h1>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <h1 className="text-lg">Home</h1>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <h1 className="text-lg">Shorts</h1>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <h1 className="text-lg">Subscription</h1>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <h1 className="text-lg">Subscription</h1>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <h1 className="text-lg">Home</h1>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <h1 className="text-lg">Shorts</h1>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <h1 className="text-lg">Subscription</h1>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <h1 className="text-lg">Subscription</h1>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <h1 className="text-lg">Home</h1>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <h1 className="text-lg">Shorts</h1>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <h1 className="text-lg">Subscription</h1>,
    },
  ];
  return (
    <div className="border border-gray-200 w-[15%] mt-12 overflow-y-scroll overflow-x-hidden relative left-0 right-0 top-0 bottom-0 h-[calc(100vh-3.4rem)]">
      {list.map((element, index) => {
        return (
          <div className="flex mx-5 my-5" key={index}>
            {element.icons}
            <p className="ml-8">{element.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
