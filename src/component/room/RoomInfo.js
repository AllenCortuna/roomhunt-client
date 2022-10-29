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

  const waiting = <span className='w-[20rem] mt-10 md:mt-20'>
    <Loading text={"Fetching Room"} />
  </span>
  return (
    <>
      {loading ? waiting : 
        <span className='mt-14'>
        {room.name}
        {room.price}
        {room.category}
        {room.category}
      </span>}
    </>
  )
}

export default RoomInfo
