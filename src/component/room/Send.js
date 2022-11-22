import React from "react";
import { BiMailSend } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Send = ({ room, verified }) => {
  const navigate = useNavigate();
  const acc = JSON.parse(localStorage.getItem("acc"))?.result;
  const client = JSON.parse(localStorage.getItem("client"))?.result;
  const profile = acc ? acc : client;
  return (
    <span className="flex flex-row gap-5 p-3">
      {verified && (
        <button
          type="button"
          onClick={() =>
            navigate(
              `/messageSend?reciever=${room.ownerName}&recieverId=${room.owner}&sender=${profile.name}&senderId=${profile._id}`
            )
          }
          className="p-2 text-zinc-500 rale  text-xs font-[500] border rounded-sm shad bg-zinc-200"
        >
          <BiMailSend className="mr-1 inline" /> Message
        </button>
      )}

      <button
        type="button"
        onClick={() => navigate(`/accinfo/${room.owner}`)}
        className="p-2 text-zinc-500 rale text-xs font-[500] border rounded-sm shad bg-zinc-200"
      >
        <BsFillInfoCircleFill className="mr-1 inline" />
        Info
      </button>
    </span>
  );
};

export default Send;
