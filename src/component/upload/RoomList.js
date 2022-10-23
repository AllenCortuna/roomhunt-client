import React, { useEffect } from "react";
import { roomStore } from "../../state/room";

const RoomList = () => {
  const rooms = roomStore((state) => state.rooms);

  const getOwnRooms = roomStore((state) => state.getOwnRooms);
  const id = JSON.parse(localStorage.getItem("acc")).result._id;
  useEffect(() => {
    getOwnRooms(id);
    console.log(id);
  }, [getOwnRooms, id]);
  return (
    <div className="grid grid-cols-1 w-[21rem] md:w-[28rem] gap-4 mx-auto">
      {rooms.map((room) => (
        <span key={room._id} className="bg-white shadow-lg grid  grid-cols-3 rounded-lg">
          <img
            src={room.image}
            loading="lazy"
            alt="roomImg"
            className="rounded-bl-lg rounded-tl-lg object-cover w-full h-28"
          />
          <span className="col-span-2">
            <h1 className="inline text-cyan-800 drop-shadow-sm font-bold text-xs uppercase">
              {room.name}
            </h1>
            <h1>{room.price}</h1>
          </span>
        </span>
      ))}
    </div>
  );
};

export default RoomList;
