import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
const SideBar = () => {
  const list = [
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <h1 className="text-xl">Home</h1>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <h1 className="text-xl">Shorts</h1>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <h1 className="text-xl">Subscription</h1>,
    },
    {
        icons: <IoHomeOutline size={"25px"} />,
        title: <h1 className="text-xl">Home</h1>,
      },
      {
        icons: <SiYoutubeshorts size={"25px"} />,
        title: <h1 className="text-xl">Shorts</h1>,
      },
      {
        icons: <MdOutlineSubscriptions size={"30px"} />,
        title: <h1 className="text-xl">Subscription</h1>,
      },
      {
        icons: <IoHomeOutline size={"25px"} />,
        title: <h1 className="text-xl">Home</h1>,
      },
      {
        icons: <SiYoutubeshorts size={"25px"} />,
        title: <h1 className="text-xl">Shorts</h1>,
      },
      {
        icons: <MdOutlineSubscriptions size={"30px"} />,
        title: <h1 className="text-xl">Subscription</h1>,
      },
      {
        icons: <IoHomeOutline size={"25px"} />,
        title: <h1 className="text-xl">Home</h1>,
      },
      {
        icons: <SiYoutubeshorts size={"25px"} />,
        title: <h1 className="text-xl">Shorts</h1>,
      },
      {
        icons: <MdOutlineSubscriptions size={"30px"} />,
        title: <h1 className="text-xl">Subscription</h1>,
      },
      {
        icons: <MdOutlineSubscriptions size={"30px"} />,
        title: <h1 className="text-xl">Subscription</h1>,
      },
      {
        icons: <IoHomeOutline size={"25px"} />,
        title: <h1 className="text-xl">Home</h1>,
      },
      {
        icons: <SiYoutubeshorts size={"25px"} />,
        title: <h1 className="text-xl">Shorts</h1>,
      },
      {
        icons: <MdOutlineSubscriptions size={"30px"} />,
        title: <h1 className="text-xl">Subscription</h1>,
      },
      {
        icons: <MdOutlineSubscriptions size={"30px"} />,
        title: <h1 className="text-xl">Subscription</h1>,
      },
      {
        icons: <IoHomeOutline size={"25px"} />,
        title: <h1 className="text-xl">Home</h1>,
      },
      {
        icons: <SiYoutubeshorts size={"25px"} />,
        title: <h1 className="text-xl">Shorts</h1>,
      },
      {
        icons: <MdOutlineSubscriptions size={"30px"} />,
        title: <h1 className="text-xl">Subscription</h1>,
      },
  ];
  return (
    <div className="border border-gray-200 w-[15%]">
      {list.map((element, index) => {
        return (
          <div
            className="flex justify-between  mx-10 my-5 w-[50%]"
            key={index}
          >
            {element.icons}
            <p>{element.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
