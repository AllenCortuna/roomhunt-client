import React from "react";

const RoomList = ({id}) => {
  
  const rooms = 4

  return (
    <div className="grid grid-cols-2 w-[21rem] bg-primary p-3 rounded-md shadow-md ">
    <span className="">
      <h1 className="text-md text-cyan-800 font-bold uppercase -mb-2">
        RoomList
      </h1>
    <p className="text-xs rale text-gray-400">{rooms.length} total rooms</p>
    </span>
    </div>
  );
};

export default RoomList;
