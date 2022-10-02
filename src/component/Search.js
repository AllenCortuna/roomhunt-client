import React from "react";
import { BsFilter } from "react-icons/bs";
import { MdOutlineHouse } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import { RiHotelLine } from "react-icons/ri";
import SearchBar from "./utility/SearchBar";


const Search = () => {
  const iconClass =
    "text-[1.5rem] inline text-gray-400 ";
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
    <div className="grid grid-cols-1 border border-gray-200 bg-white shadow-md rounded-lg p-4 maw-w-[45rem] min-w-[22rem]">
      {/* <SearchBar/> */}
      <SearchBar/>
      {/* filter */}
      <span className="pt-5">
        <BsFilter className="text-[1.5rem] text-gray-600 inline" />
        <p className="ml-3 inline text-sm font-semibold text-gray-500">
          Filters
        </p>
        <hr className="text-gray-400 w-full mt-2" />
      </span>

    {/* Property type checkbox */}
    <span className="grid grid-cols-3 gap-2">
    <h4 className="mt-3 ml-1 text-[.8rem] col-span-3 text-gray-500 font-semibold">Property Type</h4>
    {type.map((a)=>(
      <span className="flex flex-wrap justify-center text-center flex-row border border-gray-400 p-2 rounded-lg ">
      {a.icon}
      <p className="ml-2 mt-1 inline text-xs text-gray-500">{a.name}</p>
</span>
    ))}
    </span>

    </div>
  );
};

export default Search;
