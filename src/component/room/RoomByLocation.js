import React from "react";
import { roomStore } from "../../state/room";
import Room from "./Room";

const RoomByLocation = () => {
  const rooms = roomStore((state) => state.suggestedRoom);
  return (
    <span className="grid gap-0">
      {rooms ? (
        <>
          <h4 className="mx-auto text-cyan-800 font-bold">
          Suggested Rooms
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto  gap-3 pt-5 items-start p-3 md:p-10">
            {rooms?.map((room) => (
              <span key={room._id}>
                <Room room={room} />
              </span>
            ))}
          </div>
        </>
      ) : null}
    </span>
  );
};

export default RoomByLocation;
