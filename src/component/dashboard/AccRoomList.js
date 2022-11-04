/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { roomStore } from "../../state/room";
import Room from "../room/Room";

const AccRoomList = () => {
  const id = JSON.parse(localStorage?.getItem("acc")).result.id;
 const getOwnRooms = roomStore((state)=>state.getOwnRooms)
 const rooms = roomStore((state)=>state.rooms)
  useEffect(()=>{
    getOwnRooms(id)

  },[id])
  return <div className="flex flex-wrap gap-5 mt-14 md:mt-32 p-2 md:px-40">
    {rooms.map((room)=>(
      <Room room={room}/>
    ))}
    
    </div>;
};

export default AccRoomList;
