/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import React from "react";
import { BsCalendarWeek, BsFillHouseFill } from "react-icons/bs";
import { MdPreview } from "react-icons/md";
import Moment from "react-moment";
import Slider from './Slider'

const AccRoom = ({ room }) => {
  const navigate = useNavigate();
  const txt = "text-gray-500 font-[500] text-[.64rem] space-mono truncate";
  const highlight = "text-gray-500 font-semibold  text-[.64rem] space-mono";
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const unavailable = new Date(room.unavailableUntil).getTime() > now.getTime();
  const isObject = typeof room?.image === "object";
  return (
    <span
      key={room._id}
      className="group bg-white shadow-md grid gap-1  grid-cols-1 rounded-lg pb-1 transition-all ease-linear duration-300 hover:-m-2 hover:shadow-xl md:w-[12rem] border h-auto"
      onClick={() => navigate(`/rooms/${room._id}`)}
    >
      <img
        src={isObject ? room.image[0] : room.image}
        alt="roomImg"
        className="rounded-tr-md rounded-tl-md object-cover w-full h-28"
      />
   {/* <Slider image={room.image} />  */}
      <span className="p-2 py-0 grid">
        <h1 className="text-cyan-800 font-semibold text-[.64rem] capitalize ">
          <BsFillHouseFill className="mr-[.2rem] inline -mt-[.15rem]" />
          {room.name}
        </h1>

        <h1 className={txt}>
          <MdPreview className="inline mr-1" />
          <span className="rale font-normal text-gray-400">Total View: </span>
          <span className="font-semibold"> {room.view}</span>
        </h1>

        <h1 className={highlight}>
          <span className="rale font-normal text-gray-400">Bed count:</span>
          {room.bed}
        </h1>

        <h1 className={txt}>
          <BsCalendarWeek className="inline mr-1" />
          <span className="rale font-normal text-gray-400">
            {unavailable ? "Unvailable-Until:" : ""}
          </span>{" "}
          {unavailable ? (
            <Moment date={room.unavailableUntil} format="MMM-DD" />
          ) : (
            "Available"
          )}
        </h1>

        <h1 className={highlight}>
          <span className="rale font-normal text-gray-400">Price:</span> &#8369;
          {room.price}
          <span className="">
            {room.category === "Dorm" ? " monthly" : " /night"}
          </span>
        </h1>
      </span>
    </span>
  );
};

export default AccRoom;
