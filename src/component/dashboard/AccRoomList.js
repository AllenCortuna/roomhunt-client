/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { roomStore } from "../../state/room";
import AccRoom from "../room/AccRoom";
import Loading from '../utility/Loading'

const AccRoomList = () => {
  const id = JSON.parse(localStorage?.getItem("acc")).result._id;
 const getOwnRooms = roomStore((state)=>state.getOwnRooms)
 const rooms = roomStore((state)=>state.rooms)
 const loading = roomStore((state)=>state.loading)
  useEffect(()=>{
    getOwnRooms(id)
  },[id])
  return <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-14 md:mt-32 p-2 md:px-40">
    {loading && <Loading text={"Getting Rooms"} />}
    {rooms.map((room)=>(
      <AccRoom room={room}/>
    ))}
  { (!rooms && !loading) && 
      <h4 className="text-3xl text-zinc-800 text-center">No rooms Available</h4>     
  }
    
    </div>;
};

export default AccRoomList;
