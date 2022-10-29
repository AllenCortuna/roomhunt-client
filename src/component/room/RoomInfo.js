/* eslint-disable react-hooks/exhaustive-deps */
// import Moment from "react-moment";
import Loading from '../utility/Loading'
import React, { useEffect } from 'react'
import { roomStore } from "../../state/room";
import { useParams } from 'react-router-dom';

const RoomInfo = () => {

  const getRoom = roomStore((state) => state.getRoom);
  const room = roomStore((state) => state.room);
  const loading = roomStore((state) => state.loading);
  const { id } = useParams()

  useEffect(() => {
    getRoom(id)
  }, [id])

  const waiting = <span className='grid w-[20rem] mt-20 md:mt-40 mx-auto'>
    <Loading text={"Fetching Room Info"} />
  </span>
  return (
    <>
      {loading ? waiting :
        <span className='mt-14 p-3 grid md:grid-cols-3 gap-5 max-w-[21rem] md:max-w-[50rem] mx-auto bg-white rounded-lg shadow-md'>
          <img
            src={room.image}
            alt="room"
            className=" rounded-tr-md rounded-tl-md object-cover w-full h-[26rem]  md:rounded-tr-none md:rounded-br-none md:rounded-md"
          />

          <span className='col-span-2 p-2'>
            {room.name}
            {room.price}
            {room.category}
            {room.category}
          </span>
        </span>}
    </>
  )
}

export default RoomInfo
