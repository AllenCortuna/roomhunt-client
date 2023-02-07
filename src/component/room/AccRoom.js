import { useNavigate } from "react-router-dom";
import React from "react";
import {
  BsFillCalendarCheckFill,
} from "react-icons/bs";
import { IoIosBed } from "react-icons/io";

import { FaStreetView } from "react-icons/fa";
import Moment from "react-moment";
// import Slider from './Slider'

const AccRoom = ({ room }) => {
  const navigate = useNavigate();
  const highlight = "text-gray-500 font-semibold  text-[.64rem] space-mono truncate";
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const unavailable = new Date(room.unavailableUntil).getTime() > now.getTime();
  const isObject = typeof room?.image === "object";
  return (
    <span
      key={room._id}
      className="group bg-white shadow-md grid p-0 gap-1  grid-cols-1 rounded-lg pb-1 transition-all ease-linear duration-300 hover:-m-2 hover:shadow-xl border w-[10rem] md:w-[14rem]"
      onClick={() => navigate(`/rooms/${room._id}`)}
    >
      <img
        src={isObject ? room.image[0] : room.image}
        alt="roomImg"
        className="rounded-lg object-cover w-full h-28"
      />
      <span className="p-2 py-0 grid">

        <h1 className={highlight}>
          <IoIosBed className="inline mr-1" />
          <span className="rale font-normal text-gray-400">Name: </span>
          {room.name}
        </h1>
    

        <h1 className={highlight}>
          <BsFillCalendarCheckFill className="inline mr-1" />
          <span className="rale font-normal text-gray-400">
            {unavailable ? "Unvailable-Til:" : ""}
          </span>{" "}
          {unavailable ? (
            <Moment date={room.unavailableUntil} format="MMM-DD" />
          ) : (
            "Available"
          )}
        </h1>
    
        <h1 className={highlight}>
          <FaStreetView className="inline mr-1" />
          <span className="rale font-normal text-gray-400">Total View: </span>
          <span className="font-semibold"> {room.view}</span>
        </h1>

      </span>
    </span>
  );
};

export default AccRoom;
