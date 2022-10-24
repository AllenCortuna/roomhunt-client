import React, { useEffect } from "react";
import { roomStore } from "../../state/room";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { BsCalendarWeek } from "react-icons/bs";
import Moment from "react-moment";

const RoomList = () => {
  const rooms = roomStore((state) => state.rooms);

  const getOwnRooms = roomStore((state) => state.getOwnRooms);
  const id = JSON.parse(localStorage.getItem("acc")).result._id;
  useEffect(() => {
    getOwnRooms(id);
  }, [getOwnRooms, id, rooms]);
  const txt = "text-gray-500 font-[500] text-[.64rem] space-mono truncate";
  const highlight = "text-gray-500 font-semibold  text-[.64rem] space-mono";
  return (
    <div className="grid grid-cols-2 w-[21rem] md:w-[28rem] gap-3 gap-y-5 mx-auto">
      {rooms.map((room) => (
        <span
          key={room._id}
          className="bg-white shadow-md grid p-1 gap-1  grid-cols-1 rounded-lg pb-1 hover:rotate-[10deg] hover:shadow-lg transition-all ease-linear duration-300 "
        >
          <img
            src={room.image}
            alt="roomImg"
            className="rounded-tr-md rounded-tl-md object-cover w-full h-28"
          />
          <span className="p-2 py-0 grid">
            <h1 className="text-cyan-800 font-semibold text-xs capitalize ">
              <RiShieldKeyholeFill className="mr-1 inline" />
              {room.name}
            </h1>
            <h1 className={highlight}>
              <span className="rale font-normal text-gray-400">Price:</span>{" "}
              &#8369;{room.price}
            </h1>
            <h1 className={highlight}>
              <span className="rale font-normal text-gray-400">Bed count:</span>{" "}
              {room.bed}
            </h1>

            <h1 className={txt}>
              <BsCalendarWeek className="inline mr-1" />
              <span className="rale font-normal text-gray-400">
                CheckIn:
              </span>{" "}
              {room.checkInDate ? (
                <Moment date={room.checkInDate} format="MMM-DD-YYYY" />
              ) : (
                "null"
              )}
            </h1>

            <h1 className={txt}>
              <BsCalendarWeek className="inline mr-1" />
              <span className="rale font-normal text-gray-400">
                CheckOut:
              </span>{" "}
              {room.checkOutDate ? (
                <Moment date={room.checkOutDate} format="MMM-DD-YYYY" />
              ) : (
                "null"
              )}
            </h1>
            {/* btn */}
          </span>
        </span>
      ))}
    </div>
  );
};

export default RoomList;
