import React from "react";
// eslint-disable-next-line no-unused-vars
import { BiBuildings, BiHome } from "react-icons/bi";
import { TbBeach } from "react-icons/tb";
import PropertyType from "./PropertyType";

const Search = () => {
  const iconClass =
    "text-[1.5rem] inline text-gray-400 group-hover:text-primary group-hover:drop-shadow-md ";
  const type = [
    {
      name: "Rental",
      icon: <BiHome className={`${iconClass}`} />,
    },
    {
      name: "Hotel",
      icon: <BiBuildings className={`${iconClass}`} />,
    },
    { name: "Resort", icon: <TbBeach className={`${iconClass}`} /> },
  ];
  return (
    <div className="grid grid-cols-1 border border-gray-200 bg-white shadow-md rounded-lg w-[21rem] mx-auto mt-10 md:mt-14 pt-5">
      <h1 className="drop-shadow-sm  text-cyan-800 font-bold text-md ml-3 uppercase">
        Search
      </h1>
      <PropertyType type={type} />
      
    </div>
  );
};

export default Search;
