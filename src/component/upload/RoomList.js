/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { roomStore } from "../../state/room";
import Room from "./Room";
import Loading from "../utility/Loading.js";


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
    {loading && <Loading text={"loading..."} /> }
      {rooms.map((room) => (
        <Room room={room} setid={setid} key={room._id} />
      ))}
    </div>
  );
};

export default RoomList;
