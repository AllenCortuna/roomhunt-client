/* eslint-disable no-unused-vars */
import React from "react";
import { BsFillCalendarWeekFill, BsFillGridFill } from "react-icons/bs";
import { ImPriceTag } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import Moment from "react-moment";
import { roomStore } from "../../state/room";

const Room = ({ room, setid }) => {
  const deleteRoom = roomStore((state) => state.deleteRoom);
  const icon = "inline";

  const loading = roomStore((state) => state.loading);
  return (
    <span
      key={room._id}
      className="group bg-white shadow-md grid p-1 gap-1  grid-cols-1 rounded-lg pb-1 transition-all ease-linear duration-300 hover:-m-2 hover:shadow-xl border"
    >
      <img
        src={room.image}
        alt="roomImg"
        className="rounded-tr-md rounded-tl-md object-cover w-full h-28"
      />
      <span className="p-2 py-0 grid">

        <Content
          icon={<ImPriceTag className={icon} />}
          text={"price"}
          value={<span> &#8369;{room.price}</span>}
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
        <Content
          icon={<BsFillCalendarWeekFill className={icon} />}
          text={"unavailableUntil"}
          value={
            room.unavailableUntil ? (
              <Moment date={room.unavailableUntil} format="MMM-DD-YYYY" />
            ) : (
              "None"
            )
          }
        />
    
        <Place
          icon={<MdLocationOn className={icon} />}
          value={room.location}
        />

        {/* btn */}
        <span className="ease-linear duration-300 transition-all grid-cols-2 scale-0 grid  group-hover:scale-100 gap-3 w-full h-0 group-hover:h-full pt-1">
          <button
            type="button"
            onClick={() => {
              setid(room._id);
              window.scroll(0, 0);
            }}
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
            {loading ? "processing" : "delete"}
          </button>
        </span>
      </span>
    </span>
  );
};
const Content = ({ icon, text, value }) => {
  return (
    <h1 className={"text-gray-600 font-[500]  text-[.64rem] capitalize"}>
      <span className="mr-1 inline">{icon}</span>
      <span className="mr-1 rale font-normal text-gray-500 capitalize">{text}</span>
      {value}
    </h1>
  );
};

const Place = ({ icon, value }) => {
  return (
    <h1 className={"text-gray-500 font-semibold  text-[.64rem] truncate "}>
      <span className="mr-1 inline">{icon}</span>
      <span className="mr-1 rale font-normal text-gray-500 capitalize">{value}</span>
    </h1>
  );
};

export default Room;
