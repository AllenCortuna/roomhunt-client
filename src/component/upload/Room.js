/* eslint-disable no-unused-vars */
import React from "react";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { BsCalendarWeek } from "react-icons/bs";
import Moment from "react-moment";
import { roomStore } from "../../state/room";

const Room = ({ room, setid }) => {
  const deleteRoom = roomStore((state) => state.deleteRoom);
  const txt = "text-gray-500 font-[500] text-[.64rem] space-mono truncate";
  const highlight = "text-gray-500 font-semibold  text-[.64rem] space-mono";
  const loading = roomStore((state) => state.loading);
  return (
    <span
      key={room._id}
      className="group bg-white shadow-md grid p-1 gap-1  grid-cols-1 rounded-lg pb-1 transition-all ease-linear duration-300 hover:-m-2 hover:shadow-xl "
    >
      <img
        src={room.image}
        alt="roomImg"
        className="rounded-tr-md rounded-tl-md object-cover w-full h-28"
      />
      <span className="p-2 py-0 grid">
        <h1 className="text-cyan-800 font-semibold text-xs capitalize ">
          <RiShieldKeyholeFill className="mr-1 inline" />
          {room.name}
        </h1>
        <h1 className={highlight}>
          <span className="rale font-normal text-gray-400">Price:</span> &#8369;
          {room.price}
        </h1>
        <h1 className={highlight}>
          <span className="rale font-normal text-gray-400">Bed count:</span>{" "}
          {room.bed}
        </h1>

        <h1 className={txt}>
          <BsCalendarWeek className="inline mr-1" />
          <span className="rale font-normal text-gray-400">CheckIn:</span>{" "}
          {room.checkInDate ? (
            <Moment date={room.checkInDate} format="MMM-DD-YYYY" />
          ) : (
            "null"
          )}
        </h1>

        <h1 className={txt}>
          <BsCalendarWeek className="inline mr-1" />
          <span className="rale font-normal text-gray-400">CheckOut:</span>{" "}
          {room.checkOutDate ? (
            <Moment date={room.checkOutDate} format="MMM-DD-YYYY" />
          ) : (
            "null"
          )}
        </h1>
        {/* btn */}
        <span className="ease-linear duration-300 transition-all grid-cols-2 scale-0 grid  group-hover:scale-100 gap-3 w-full h-0 group-hover:h-full pt-1">
          <button
            type="button"
            onClick={() => setid(room._id)}
            className="text-[.6rem] font-semibold p-1 rounded-md border-[0.085rem] border-zinc-400 bg-none text-zinc-400 shadow-sm"
    disabled={loading}
          >
            update
          </button>

          <button
            type="button"
            onClick={() => deleteRoom(room._id)}
            className="text-[.6rem] font-semibold p-1 rounded-lg border bg-rose-600 text-white shadow-sm truncate"
    disabled={loading}
          >
    {loading ?"processing" :  "delete"}
          </button>
        </span>
      </span>
    </span>
  );
};

export default Room;
