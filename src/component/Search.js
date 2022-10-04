import React from "react";
import { BsFilter } from "react-icons/bs";
import { MdOutlineAir, MdOutlineHouse } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import { RiHotelLine } from "react-icons/ri";
import SearchBar from "./utility/SearchBar";
import DateRange from "./utility/DateRange";

const Search = () => {
  const iconClass = "text-[1.5rem] inline text-gray-400 ";
  const type = [
    {
      name: "Rentals",
      icon: <MdOutlineHouse className={`${iconClass}`} />,
    },
    {
      name: "Hotel",
      icon: <RiHotelLine className={`${iconClass}`} />,
    },
    { name: "Resort", icon: <TbBeach className={`${iconClass}`} /> },
  ];
  return (
    <div className="grid grid-cols-1 border border-gray-200 bg-white shadow-md rounded-lg p-4 max-w-[45rem] min-w-[21rem]">
      {/* <SearchBar/> */}
      <SearchBar />
      {/* filter */}
      <span className="pt-5">
        <BsFilter className="text-[1.5rem] text-gray-600 inline" />
        <p className="ml-3 inline text-sm font-semibold text-gray-500">
          Filters
        </p>
        <hr className="text-gray-400 w-full my-[.5rem] shadow-sm" />
      </span>

      {/* Property type checkbox */}
      <span className="grid grid-cols-3 gap-2">
        {type.map((a) => (
          <span className="flex flex-wrap justify-center text-center flex-row border border-gray-300 p-2 rounded-lg">
            {a.icon}
            <p className="ml-2 mt-1 inline text-xs text-gray-400 font-[400]">{a.name}</p>
          </span>
        ))}
      </span>
      <hr className="text-gray-400 w-full my-[.5rem]" />

      {/* tags */}
      <span className="flex justify-start gap-4">
        {/* number or beds */}
        <span className="border border-gray-200 shadow-sm rounded-lg p-2 ">
          <label className=" ml-1 text-xs text-gray-500 font-[500] mr-2">
            Beds:
          </label>
          <select className="border border-gray-200 text-xs font-semibold text-gray-400 rounded-lg p-1 focus:outline-none text-center space-mono">
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4+"}>4+</option>
          </select>
        </span>
        {/* aircon */}
        <span className="border border-gray-200 shadow-sm rounded-lg p-2 flex align-center ">
      <MdOutlineAir className="text-[1.3rem] text-gray-400 mt-1"/>
          <label className="mt-[.4rem] ml-1 text-xs text-gray-500 font-[500] ml-3">
            Aircon
          </label>
        </span>
      </span>
      <hr className="text-gray-400 w-full my-[.5rem]" />

      {/* available dates */}
           <DateRange/>
    </div>
  );
};

export default Search;
