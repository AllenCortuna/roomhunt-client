import React from "react";
// eslint-disable-next-line no-unused-vars
import { BiHome } from "react-icons/bi";
import { TbBeach } from "react-icons/tb";
import { RiHotelLine } from "react-icons/ri";

const Search = () => {
  const iconClass =
    "text-[1.5rem] inline text-gray-500 group-hover:text-primary group-hover:drop-shadow-md ";
  const type = [
    {
      name: "Rental",
      icon: <BiHome className={`${iconClass}`} />,
    },
    {
      name: "Hotel",
      icon: <RiHotelLine className={`${iconClass}`} />,
    },
    { name: "Resort", icon: <TbBeach className={`${iconClass}`} /> },
  ];
  return (
    <div className="grid grid-cols-1 border border-gray-200 bg-white shadow-md rounded-lg w-[21rem] mx-auto mt-10 md:mt-14 pt-5">
      <h1 className=" drop-shadow-sm  text-cyan-800 font-bold text-sm ml-3 uppercase">Search Rooms</h1>
      <span className=" mt-3 rounded-md p-3 pb-4 bg-gray-100">
        <span className="grid grid-cols-3 gap-2 mt-1">
          {type.map((a) => (
            <span className="group flex flex-wrap justify-center text-center flex-row border border-gray-300 p-2 rounded-3xl hover:border-yellow hover:bg-yellow hover:shadow-md transition-all duration-300 ease-linear">
              {a.icon}
              <p className="group-hover:text-white group-hover:font-semibold ml-2 mt-1 inline text-[.7rem] text-gray-500 group-hover:drop-shadow-md">
                {a.name}
              </p>
            </span>
          ))}
        </span>
      </span>
    </div>
  );
};

export default Search;
