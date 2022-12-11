/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { roomStore } from "../../state/room";
import AccRoom from "../room/AccRoom";
import Loading from "../utility/Loading";
import { useParams } from "react-router-dom";

const OwnRooms = () => {

  const id = useParams()
  const getOwnRooms = roomStore((state) => state.getOwnRooms);
  const rooms = roomStore((state) => state.rooms);
  const loading = roomStore((state) => state.loading);
  useEffect(() => {
    getOwnRooms(id.id);
  }, [id]);
  
  return (
    <span className="flex flex-col">
      {loading && (
        <span className="m-auto mt-20 ">
          <Loading text={"Getting Rooms"} />
        </span>
      )}
      <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 p-2 md:px-40">
        {rooms.map((room) => (
          <AccRoom room={room} />
        ))}
      </div>
    </span>
  );
};

export default OwnRooms
