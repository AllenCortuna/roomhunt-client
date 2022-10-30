/* eslint-disable react-hooks/exhaustive-deps */
// import Moment from "react-moment";
import Loading from '../utility/Loading'
import React, { useEffect } from 'react'
import { roomStore } from "../../state/room";
import { useParams } from 'react-router-dom';
import { MdLocationOn } from "react-icons/md";
import { RiBuildingFill } from "react-icons/ri";
import Info from './Info';

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
        <span className='grid md:grid-cols-3 w-[21rem] md:w-[42rem] mt-14 mb-14 md:mt-20 rounded-lg bg-white shadow-md mx-auto border p-0'>
          <img
            src={room.image}
            alt="room"
            loading="lazy"
            className='object-cover h-[24rem] rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:rounded-tr-none'
          />
          <span className="block md:col-span-2 pt-4">
            {/* room owner */}
            <span className='shad grid p-3 bg-zinc-200  w-auto h-auto rounded-tr-xl rounded-br-xl md:mr-20 mr-8 mb-4 truncate '>
              <h4 className="drop-shadow-sm text-cyan-800 font-bold">
                <RiBuildingFill className='inline mr-1 mb-1' />
                {room.ownerName}</h4>
              <h4 className="text-zinc-500 text-xs">
                <MdLocationOn className='inline mb-1' />
                {room.location}</h4>
            </span>
            {/* room info */}
            <span className='grid gap-5'>
              <Info room={room} />
              {/* room review */}
              <span>

              </span>
            </span>
          </span>
        </span>}
    </>
  )
}

export default RoomInfo
