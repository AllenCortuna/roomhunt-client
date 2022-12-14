import React from "react";
import { roomStore } from "../../state/room";
import Room from "./Room";
import { BsHouseDoorFill } from "react-icons/bs";

const RoomByLocation = () => {
  const rooms = roomStore((state) => state.suggestedRoom);
  return (
    <span className="grid gap-0 p-2 md:p-10">
    
      <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 md:gap-5 items-center ">
      <h4 className="text-cyan-800 font-bold drop-shadow-md  text-md mb-4 mx-auto w-full col-span-2 md:col-span-3 lg:col-span-4">
        <BsHouseDoorFill className="mr-1 inline mb-1" />
        Suggested Rooms
        <hr className="text-zinc-400 drop-shadow-sm" />
      </h4>
    
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
