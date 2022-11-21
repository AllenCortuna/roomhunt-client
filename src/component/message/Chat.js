import React from "react";
import Moment from "react-moment";

const Chat = ({ chat }) => {
  return (
    <span className="flex gap-3 flex-row content-start justify-start sm:w-[16rem] md:max-w-[20rem] rounded bg-white rounded-lg p-4 whitespace-wrap shadow">
      <span className="flex flex-cols justify-start content-center mt-[.5]">
        <span className="rounded-full h-8 w-8 bg-zinc-600 text-white text-2xl font-bold text-center flex justify-center content-center uppercase ">
          {chat.sender.charAt(0)}
        </span>
      </span>
      <span className="grid">
        <span className="mb-1">
          <h4 className="text-xs font-[500] text-zinc-500">{chat.sender}</h4>
          <h4 className="text-[.6rem] rale font-[500] text-zinc-400">
            <Moment date={chat.date} format="MMM-DD-YYYY" />
          </h4>
        </span>
        <h4 className="text-xs text-zinc-500 rale">{chat.message}</h4>
      </span>
      {/* todo: delete reply */}
    </span>
  );
};

export default Chat;
