import React from "react";

const ButtonsList = () => {
  const buttons = [
    "All",
    "Gaming",
    "Music",
    "Computer programming",
    "Javascript",
    "Modern Warfare",
    "Anime",
    "Chai aur Code",
    "React",
    "RTKQuery",

  ];
  return (
    <div className="h-10 overflow-y-hidden overflow-x-scroll  text-lg  flex flex-row gap-8 mt-2 ml-2">
      {buttons.map((button, index) => (
        <button className="bg-gray-100 rounded-lg px-2" key={index}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsList;
