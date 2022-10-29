import React from "react";
import { roomStore } from "../../state/room";
import Room from "./Room";
import Loading from "../utility/Loading";

const RoomSearch = () => {
  const rooms = roomStore((state) => state.rooms);
  const loading = roomStore((state) => state.loading);
  return (
    <span className="grid">
      {loading && (
        <span className="mt-14 md:mt-20  w-[21rem] mx-auto">
          <Loading text={"Searching..."} />
        </span>
      )}
      {(rooms.length===0 && loading===false)  && (
        <span className="mt-14 md:mt-20  w-[21rem] mx-auto">
          <h1>No rooms available according to your search</h1>
        </span>
      )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto  gap-3  pt-14 items-start p-3 md:p-10">
          {rooms.map((room) => (
            <Room room={room} />
          ))}
        </div>
    </span>
  );
};

export default RoomSearch;
