import React from "react";
import { BsFilter } from "react-icons/bs";
import { MdOutlineAir, MdOutlineHouse } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import { RiHotelLine } from "react-icons/ri";
import SearchBar from "./utility/SearchBar";
import DateRange from "./utility/DateRange";
import {
  aircon,
  bsFilter,
  container,
  iconClass,
  optionLabel,
  selection,
} from "./style/search";

const Search = () => {
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
    <div className={container}>
      {/* <SearchBar/> */}
      <SearchBar />
      {/* filter */}
      <span className="pt-5">
        <BsFilter className={bsFilter} />
        <p className="ml-3 inline text-sm font-semibold text-gray-500">
          Filters
        </p>
        <hr className="text-gray-400 w-full my-[.5rem] shadow-sm" />
      </span>

      {/* Property type checkbox */}
      <span className="grid grid-cols-3 gap-2 mt-1">
        {type.map((a) => (
          <span className="group flex flex-wrap justify-center text-center flex-row border border-gray-300 p-2 rounded-lg  hover:border-gray-300 hover:bg-green hover:shadow-md transition-all duration-300 ease-linear">
            {a.icon}
            <p className="group-hover:text-white group-hover:font-semibold ml-2 mt-1 inline group-hover:text-[.7rem] text-gray-400 drop-shadow-md text-xs">
              {a.name}
            </p>
          </span>
        ))}
      </span>

      {/* tags */}
      <span className="flex justify-start gap-4 mt-4">
        {/* number or beds */}
        <span className="border border-gray-200 shadow-sm rounded-lg p-2 ">
          <label className={optionLabel}>Beds:</label>
          <select className={selection}>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4+"}>4+</option>
          </select>
        </span>
        {/* aircon */}
        <span className={aircon}>
          <MdOutlineAir className="text-[1.3rem] text-gray-400 mt-1" />
          <label className="mt-[.4rem] ml-1 text-xs text-gray-500 font-[500] ml-3">
            Aircon
          </label>
        </span>
      </span>

      {/* available dates */}
      <span className="mt-4">
        <DateRange />
      </span>
    </div>
  );
};

export default Search;
