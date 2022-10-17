import React from "react";

const RoomList = ({id}) => {
  
  const rooms = 4

  return (
    <div className="md:col-span-2  md:h-[26rem]   p-3  bg-primary rounded-md shadow w-[21rem] md:w-[44.5rem] h-[23rem] md:-mt-14 md:mb-auto ">
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
