import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { BiBuildings, BiHome } from "react-icons/bi";
import { TbBeach } from "react-icons/tb";


const PropertyType = () => {
  
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
    <span className="grid rounded-tl-md rounded-tr-md p-3 pb-4 bg-gray-100 shadow-sm mb-2">
      <p className="text-gray-500 drop-shadow-sm font-semibold text-xs"><BsFillGridFill className="inline mr-1"/> Property type</p>
      <hr className="w-full mt-1 mb-2 text-gray-500 drop-shadow-sm " />

      <span className="grid grid-cols-3 gap-2 mt-1">
        {type.map((a) => (
          <span className="group flex flex-wrap justify-center items-center text-center flex-row border border-gray-300 p-2 rounded-lg hover:border-yellow hover:bg-yellow hover:shadow-md transition-all duration-300 ease-linear " key={a.name}>
            {a.icon}
            <p className="group-hover:text-white group-hover:font-semibold ml-2 inline text-[.8rem] text-gray-400 group-hover:drop-shadow-md">
              {a.name}
            </p>
          </span>
        ))}
      </span>
    </span>
  );
};

export default PropertyType;
