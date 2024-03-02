import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";
const SideBar = () => {
  const list = [
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span className="text-lg">Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span className="text-lg">Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span className="text-lg">Subscription</span>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span className="text-lg">Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span className="text-lg">Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span className="text-lg">Subscription</span>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span className="text-lg">Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span className="text-lg">Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span className="text-lg">Subscription</span>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span className="text-lg">Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span className="text-lg">Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span className="text-lg">Subscription</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span className="text-lg">Subscription</span>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span className="text-lg">Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span className="text-lg">Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span className="text-lg">Subscription</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span className="text-lg">Subscription</span>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span className="text-lg">Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span className="text-lg">Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span className="text-lg">Subscription</span>,
    },
  ];
  const toggle = useSelector((state) => state.Toggle.open);
  return (
    <div className={`border border-gray-200 ${toggle ?' w-[15%] ': 'w-20' }  mt-12 overflow-y-scroll overflow-x-hidden relative left-0 right-0 top-0 bottom-0 h-[calc(100vh-3.4rem)]`}>
      {list.map((element, index) => {
        return (
          <div className="flex mx-5 my-5" key={index}>
            {element.icons}
            {toggle && <p className="ml-8">{element.title}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
