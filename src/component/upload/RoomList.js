import React, { useEffect } from "react";
import { roomStore } from "../../state/room";

const RoomList = () => {
  const rooms = roomStore((state) => state.rooms);

  const getOwnRooms = roomStore((state) => state.getOwnRooms);
  const id = JSON.parse(localStorage.getItem("acc")).result._id;
  useEffect(() => {
    getOwnRooms(id);
    console.log(id)
  }, [getOwnRooms, id]);
  return (
    <div className="grid md:grid-cols-2 w-[21rem] md:w-[42rem] ">
      {rooms.map((room) => (
        <span
          key={room._id}
          className="bg-white shadow-md p-4 grid grid-cols-2 rounded-md"
        >
          <img
            src={room.image}
            loading="lazy"
            alt="roomImg"
            className="shad border-2"
          />
          <h1>{room.name}</h1>
          <h1>{room.price}</h1>
        </span>
      ))}
    </div>
  );
};

export default RoomList;
