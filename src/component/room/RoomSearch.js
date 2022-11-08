import React from "react";
import { roomStore } from "../../state/room";
import Room from "./Room";
import Loading from "../utility/Loading";
import noRoom from "../img/noRoom.svg";
import BtnLink from "../btn/BtnLink";

const RoomSearch = () => {
  const rooms = roomStore((state) => state.rooms);
  const loading = roomStore((state) => state.loading);

  const empty = (
      <span className="mx-auto mt-14 md:mt-20 w-[21rem] p-5 ">
    <span className=" rounded-2xl border border-zinc-300 p-10 block mb-5">
        <img
          src={noRoom}
          alt="empty"
          className="drop-shadow-sm mx-auto mb-8 "
        />
        <h1 className="text-gray-500 text-center text-sm font-[500]">
          No rooms available according to your Recent search
        </h1>
      </span>
      <BtnLink link={"/"} text="Search Again" />
    </span>
  );
  return (
    <span className="grid">
      {loading && (
        <span className="mt-14 md:mt-20  w-[21rem] mx-auto">
          <Loading text={"Searching..."} />
        </span>
      )}
      {rooms.length === 0 && loading === false && empty}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto  gap-3  pt-14 items-start p-3 md:p-10">
        {rooms.map((room) => (
          <Room room={room} key={room._id} />
        ))}
      </div>
    </span>
  );
};

export default RoomSearch;
