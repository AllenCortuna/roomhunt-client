import React from "react";
import { roomStore } from "../../state/room";
import Room from "./Room";
import { BsHouseDoorFill } from "react-icons/bs";

const RoomByLocation = () => {
  const rooms = roomStore((state) => state.suggestedRoom);
  return (
    <span className="grid gap-0 max-w-[95%] ml-[2.5%]">
      <h4 className="text-cyan-800 font-bold col-span-2 md:col-span-3 lg:col-span-4 drop-shadow-md  text-md mb-4 ml-3">
        <BsHouseDoorFill className="mr-1 inline mb-1" />
        Suggested Rooms
        <hr className="text-zinc-400 drop-shadow-sm" />
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto  gap-3 pt-5 items-center md:p-10">
        {rooms?.map((room) => (
          <span key={room._id}>
            <Room room={room} />
          </span>
        ))}
      </div>
    
    </span>
  );
};

export default RoomByLocation;
