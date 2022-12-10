/* eslint-disable no-unused-vars */
import React from "react";
import { BsFillCalendarWeekFill, BsFillGridFill } from "react-icons/bs";
import { ImPriceTag } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

const Room = ({ room }) => {
  const icon = "inline";
  const navigate = useNavigate();
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const unavailable = new Date(room.unavailableUntil).getTime() > now.getTime();
  const isObject = typeof room?.image === "object";
  return (
    <span
      key={room._id}
      className="group bg-white shadow-md grid p-0 gap-1  grid-cols-1 rounded-lg pb-1 transition-all ease-linear duration-300 hover:-m-2 hover:shadow-xl border md:w-[12rem]"
      onClick={() => navigate(`/rooms/${room._id}`)}
    >
      <img
        src={isObject? room.image[0] : room.image}
        alt="roomImg"
        className="rounded-tr-md rounded-tl-md object-cover w-full h-28"
      />
      <span className="p-2 py-0 grid">
        <Content
          icon={<BsFillCalendarWeekFill className={icon} />}
          text={unavailable ? "unavailable til" : ""}
          value={
            unavailable ? (
              <Moment date={room.unavailableUntil} format="MMM-DD" />
            ) : (
              "Available"
            )
          }
        />
        <Price
          icon={<ImPriceTag className={icon} />}
          text={"price"}
          value={<span>&#8369; {room.price}</span>}
          cat={room.category}
        />
        <Content
          icon={<BsFillGridFill className={icon} />}
          text={"category"}
          value={room.category}
        />
        <Content
          icon={<IoIosBed className={icon} />}
          text={"no. of bed"}
          value={room.bed}
        />
        <Place icon={<MdLocationOn className={icon} />} value={room.location} />

        <Place
          icon={<FaInfoCircle className={icon} />}
          value={room.description}
        />
      </span>
    </span>
  );
};
const Content = ({ icon, text, value }) => {
  return (
    <h1 className={"text-gray-600 font-[800]  text-[.64rem] capitalize rale"}>
      <span className="mr-1 inline">{icon}</span>
      <span className="mr-1 rale font-normal text-gray-500 capitalize truncate ">
        {text}
      </span>
      {value}
    </h1>
  );
};

const Place = ({ icon, value }) => {
  return (
    <h1 className={"text-gray-500 font-semibold  text-[.64rem] truncate "}>
      <span className="mr-1 inline">{icon}</span>
      <span className="mr-1 rale font-normal text-gray-500 capitalize">
        {value}
      </span>
    </h1>
  );
};

const Price = ({ icon, text, value, cat }) => {
  return (
    <h1 className={"text-gray-600 font-[800]  text-[.64rem] capitalize rale "}>
      <span className="mr-1 inline">{icon}</span>
      <span className="mr-1 rale font-normal text-gray-500 capitalize truncate">
        {text}
      </span>
      {value}
      <span className="ml-1 lowercase rale text-zinc-500 font-[400]">
        {cat === "dorm" ? "montly" : "per night"}
      </span>
    </h1>
  );
};

export default Room;
