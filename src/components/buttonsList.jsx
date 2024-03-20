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
    'Animation',
    'COC',
    'Bgmi',
    'Mr.Beast',
    'Chhota bheem',


  ];
  return (
    <div className="overflow-x-scroll no-scrollbar flex w-full fixed bg-white z-10">
      {buttons.map((button, index) => (
        <div key={index} className="p-3">
        <button className="bg-gray-200 rounded-lg px-4 py-1 focus:bg-slate-900 focus:text-white" >
          <span className="whitespace-nowrap">{button}</span>
        </button>
        </div>
      ))}
    </div>
  );
};

export default ButtonsList;
