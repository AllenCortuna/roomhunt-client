/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { roomStore } from "../../state/room";
import AccRoom from "../room/AccRoom";
import Loading from "../utility/Loading";

const AccRoomList = () => {
  const id = JSON.parse(localStorage?.getItem("acc")).result._id;
  const getOwnRooms = roomStore((state) => state.getOwnRooms);
  const rooms = roomStore((state) => state.rooms);
  const loading = roomStore((state) => state.loading);
  useEffect(() => {
    getOwnRooms(id);
  }, [id]);
  return (
    <span className="flex flex-col">
      {loading && (
        <span className="m-auto mt-20 ">
          <Loading text={"Getting Rooms"} />
        </span>
      )}
      <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-14 md:mt-32 p-2 md:px-40">
        {rooms.map((room) => (
          <AccRoom room={room} />
        ))}
      </div>

      {rooms.length === 0 && !loading && (
        <span className="text-3xl text-zinc-800 text-center mx-auto">
          No rooms Available
        </span>
      )}
    </span>
  );
};

export default AccRoomList;
