/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import React from "react";
import { BsCalendarWeek, BsFillHouseFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Moment from "react-moment";

const Room = ({ room }) => {
  const navigate = useNavigate();
  const txt = "text-gray-500 font-[500] text-[.64rem] space-mono truncate";
  const highlight = "text-gray-500 font-semibold  text-[.64rem] space-mono";
  return (
    <span
      key={room._id}
      className="group bg-white shadow-md grid p-1 gap-1  grid-cols-1 rounded-lg pb-1 transition-all ease-linear duration-300 hover:-m-2 hover:shadow-xl md:w-[12rem] border h-auto"
      onClick={() => navigate(`/rooms/${room._id}`)}
    >
      <img
        src={room.image}
        alt="roomImg"
        className="rounded-tr-md rounded-tl-md object-cover w-full h-28"
      />
      <span className="p-2 py-0 grid">
        <h1 className="text-cyan-800 font-semibold text-[.64rem] capitalize ">
          <BsFillHouseFill className="mr-[.2rem] inline -mt-[.15rem]" />
          {room.ownerName}
        </h1>

        <h1 className="text-gray-400 text-[.64rem] capitalize truncate rale">
          <MdLocationOn className="mr-[.2rem] inline -mt-[.15rem]" />
          {room.location}
        </h1>
        <h1 className={highlight}>
          <span className="rale font-normal text-gray-400">Price:</span> &#8369;
          {room.price}
        </h1>
        <h1 className={highlight}>
          <span className="rale font-normal text-gray-400">Bed count:</span>
          {room.bed}
        </h1>

        <h1 className={txt}>
          <BsCalendarWeek className="inline mr-1" />
          <span className="rale font-normal text-gray-400">Unavailable-Until:</span>{" "}
          {room.unavailableUntil ? (
            <Moment date={room.unavailableUntil} format="MMM-DD" />
          ) : (
            "None"
          )}
        </h1>

      </span>
    </span>
  );
};

export default Room;
