/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { roomStore } from "../../state/room";
import Room from "./Room";

const RoomList = () => {
  const rooms = roomStore((state) => state.rooms);

  const loading = roomStore((state) => state.loading);
  const getOwnRooms = roomStore((state) => state.getOwnRooms);
  const id = JSON.parse(localStorage.getItem("acc")).result._id;
  const [render, setrender] = useState(0);
  useEffect(() => {
    getOwnRooms(id);
    setrender(render + 1);
  }, []);
  return (
    <div className="grid grid-cols-2 w-[21rem] gap-3 gap-y-5 mx-auto">
      <h1>render count: {render}</h1>
      {rooms.map((room) => (
        <Room room={room} />
      ))}
      {loading && "loading"}
    </div>
  );
};

export default RoomList;
