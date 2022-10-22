import React from "react";
import warn from '../img/warn.svg'
import {IoIosWarning} from 'react-icons/io'


const Warn = ({ text }) => {
  return (
    <span className="flex flex-wrap justify-center my-2 mx-auto bg-gray-200 shadow-sm rounded-md border border-red-500">
    <span className="h-3 w-full rounded-tl-md rounded-tr-md bg-red-500 "></span>
      <IoIosWarning className="text-sm mr-2 mt-1 text-white inline" />
    <img src={warn} alt="err" loading="lazy" className="w-[5rem] blocked mx-auto mt-3" />
    <p className="text-xs text-gray-500">{text}</p>

    </span>
  );
};

export default Warn;
