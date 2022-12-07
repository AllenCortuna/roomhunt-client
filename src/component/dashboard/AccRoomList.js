/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { roomStore } from "../../state/room";
import AccRoom from "../room/AccRoom";
import Loading from "../utility/Loading";
import noRoom from "../img/noRoom.svg";
import BtnLink from "../btn/BtnLink";

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
        <span className="mx-auto mt-14 md:mt-20 w-[18rem] p-5 flex flex-col">
          <span className="p-5 block">
            <img
              src={noRoom}
              alt="empty"
              className="drop-shadow-lg ml-2 mx-auto mb-8 "
            />
            <h1 className="text-zinc-500 text-center text-sm font-[500] drop-shadow-sm rale">
              No rooms available !
            </h1>
          </span>
          <span className="w-[7.5rem] mx-auto">
            <BtnLink link={"/upload"} text="Upload" />
          </span>
        </span>
      )}
    </span>
  );
};

export default AccRoomList;
