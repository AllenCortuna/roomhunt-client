/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { roomStore } from "../../state/room";
import Room from "./Room";

const RoomList = ({setid}) => {
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
    <div className="grid grid-cols-2 w-[21rem] md:w-[32.5rem] md:grid-cols-3 lg gap-3 gap-y-5 mx-auto">
      {rooms.map((room) => (
        <Room room={room} setid={setid} key={room._id} />
      ))}
      <span>
        <p className="drop-shadow-md text-cyan-800 text-sm font-bold capitalize">
          render: {render}
        </p>
        {loading && (
          <p className="drop-shadow-md text-cyan-800 text-sm font-bold ">
            loading..
          </p>
        )}
      </span>
    </div>
  );
};

export default RoomList;
