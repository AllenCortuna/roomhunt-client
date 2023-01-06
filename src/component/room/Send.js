import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Send = ({ room, verified }) => {
  const navigate = useNavigate();
  const acc = JSON.parse(localStorage.getItem("acc"))?.result;
  const client = JSON.parse(localStorage.getItem("client"))?.result;
  const profile = acc ? acc : client;
  return (
    <span className="flex flex-wrap flex-row gap-5 p-3">
      {verified && (
        <button
          type="button"
          onClick={() =>
            navigate(
              `/messageSend?&sender=${profile.name}&senderId=${profile._id}&reciever=${room.ownerName}&recieverId=${room.owner}`
            )
          }
          className="p-2 bg-zinc-700 rale  text-xs font-[600] border-2 rounded-md shadow-md text-zinc-100"
        >
          <RiSendPlaneFill className="mr-1 inline" /> Message
        </button>
      )}

      <button
        type="button"
        onClick={() => navigate(`/accinfo/${room.owner}`)}
        className="p-2 text-zinc-100 rale text-xs font-[600] border-2 rounded-md shadow-md bg-zinc-700"
      >
        <MdEmail className="mr-1 inline" />
        Contact Info
      </button>
    </span>
  );
};

export default Send;
