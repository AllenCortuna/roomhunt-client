import React from "react";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import { messageStore } from "../../state/message";

const Chat = ({ chat }) => {
  const loading = messageStore((state) => state.loading);
  const deleteMessage = messageStore((state) => state.deleteMessage);
 const navigate= useNavigate() 

  return (
    <span key={chat._id} className="group flex gap-4 flex-row content-start justify-start w-[20rem] rounded bg-white rounded-lg p-3 whitespace-wrap shadow">
      <span className="flex flex-cols justify-start content-center mt-[.5]">
        <span className="rounded-full h-8 w-8 bg-zinc-600 text-white text-2xl font-bold text-center flex justify-center content-center uppercase">
          {chat.sender.charAt(0)}
        </span>
      </span>
   
    {/* content */}
      <span className="flex flex-col w-full gap-1">
        <span className="mb-1">
          <h4 className="text-xs font-[500] text-zinc-500">{chat.sender}</h4>
          <h4 className="text-[.6rem] rale font-[500] text-zinc-400">
            <Moment date={chat.date} format="MMM-DD-YYYY" />
          </h4>
        </span>
        <h4 className="text-xs text-zinc-500 rale">{chat.message}</h4>
        <span className="ease-linear duration-300 transition-all grid-cols-2 scale-0 grid  group-hover:scale-100 gap-3  h-0 group-hover:h-full pt-1 mr-0 ml-auto ">
          <button
            type="button"
            onClick={()=> 
            navigate(
              `/messageSend?&sender=${chat.reciever}&senderId=${chat.recieverId}&reciever=${chat.sender}&recieverId=${chat.senderId}`
            )}
            className="text-[.6rem] font-semibold p-1 rounded-[.3rem] border-[0.085rem] border-zinc-400 bg-none text-zinc-400 shadow-sm"
            disabled={loading}
          >
            reply
          </button>

          <button
            type="button"
            onClick={() => deleteMessage(chat._id)}
            className="text-[.6rem] font-semibold p-1 rounded-[.3rem] border border-rose-600 bg-rose-600 text-white shadow-sm truncate"
            disabled={loading}
          >
            {loading ? "processing" : "delete"}
          </button>
        </span>
      </span>
    </span>
  );
};

export default Chat;
