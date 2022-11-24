import React from 'react'
import { BsCalendar2CheckFill, BsCalendarWeek, BsFillHouseFill } from "react-icons/bs";
import { MdPriceChange } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import Moment from "react-moment";

const Info = ({ room }) => {
  // const hint = "text-xs text-zinc-400 ml-2"
  const txt = "ml-3 text-gray-500 font-[500] text-[.74rem] space-mono truncate";
  const highlight = "ml-3 text-gray-500 font-semibold  text-[.74rem] space-mono";
  return (
    <span className="p-4 pt-0 grid md:mt-0 mt-4">
      <h1 className="text-cyan-800 font-semibold text-[.84rem] capitalize ">
        <BsFillHouseFill className="mr-[.2rem] inline -mt-[.15rem]" />
    Room Status
      </h1>

      <h1 className={highlight}>
        <MdPriceChange className="inline mr-1" />
        <span className="rale font-normal text-gray-400">Price:</span> &#8369;
        {room.price}
    <span className='inline text-zinc-400 rale font-[400]'>{room.category==="dorm" ? "/month" : "/night"}</span>
      </h1>
      <h1 className={highlight}>
        <IoIosBed className="inline mr-1" />
        <span className="rale font-normal text-gray-400 mr-2">Bed count:</span>
        {room.bed}
      </h1>

      <h1 className={txt}>
        <BsCalendar2CheckFill className="inline mr-1" />
        <span className="rale text-gray-400">Unavailable-Until:</span>
        <span className=' ml-2 font-[600]'>
          {room.unavailableUntil ? (
            <Moment date={room.unavailableUntil} format="MMM-DD-YYYY" />
          ) : (
            "None"
          )}
        </span>
      </h1>

      <h1 className={txt}>
        <BsCalendarWeek className="inline mr-1" />
        <span className="rale text-gray-400">Updated at:</span>
        <span className='ml-2 font-[600] space-mono'>
            <Moment date={room.uodatedAt} format="MMM-DD-YYYY" />
        </span>
      </h1>
    </span>
  )
}

export default Info
