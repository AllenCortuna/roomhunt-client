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
        <span className='grid md:grid-cols-2 gap-5'>
          <span className="rounded-lg ">
            <img
              src={room.image}
              alt="room"
              className='w-full h-[20rem] mb-5'
            />

          </span>
        </span>}
    </>
  )
}

export default RoomInfo
