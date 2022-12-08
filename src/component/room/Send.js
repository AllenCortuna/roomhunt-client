import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
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
              `/messageSend?&sender=${profile.name}&senderId=${profile._id}&reciever=${room.ownerName}&recieverId=${room.owner}`
            )
          }
          className="p-2 text-zinc-600 rale  text-xs font-[500] border rounded-md shad bg-zinc-100"
        >
          <RiSendPlaneFill className="mr-1 inline" /> Message
        </button>
      )}

      <button
        type="button"
        onClick={() => navigate(`/accinfo/${room.owner}`)}
        className="p-2 text-zinc-600 rale text-xs font-[500] border rounded-md shad bg-zinc-100"
      >
        <BsFillInfoCircleFill className="mr-1 inline" />
        Contact Info
      </button>
    </span>
  );
};

export default Send;
