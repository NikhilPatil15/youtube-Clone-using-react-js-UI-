import React from "react";
import Avatar from "react-avatar";

const ChatMessage = ({item}) => {
  return (
    <div className="flex items-center gap-3">
      <div>
        <Avatar
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          size={20}
          round={true}
          className="w-[50%]"
        />
      </div>
      <div>
        <h1 className="font-bold text-lg">{item.name}:</h1>
      </div>
      <div>
        <p>{item.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
