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
    <span className="mx-auto mt-14 md:mt-20 w-[18rem] p-5 flex flex-col">
      <span className="p-5 block">
        <img
          src={noRoom}
          alt="empty"
          className="drop-shadow-lg ml-2 mx-auto mb-8 "
        />
        <h1 className="text-zinc-500 text-center text-sm font-[500] drop-shadow-sm rale">
          No rooms available according to your recent search. Try different queries !

        </h1>
      </span>
      <span className="w-[10rem] mx-auto">
        <BtnLink link={"/search"} text="Search Again" />
      </span>
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
