import React from "react";
import { BiBuildings, BiHome } from "react-icons/bi";
import { TbBeach } from "react-icons/tb";

const PropertyType = ({ handleCat,query }) => {
  const iconClass =
    "text-[1.5rem] inline group-hover:drop-shadow-md ";
  const type = [
    {
      name: "dorm",
      icon: <BiHome className={`${iconClass}`} />,
    },
    {
      name: "hotel",
      icon: <BiBuildings className={`${iconClass}`} />,
    },
    { name: "resort", icon: <TbBeach className={`${iconClass}`} />
    },
  ];
  return (
    // <span className="grid rounded-tl-md rounded-tr-md p-3 pb-4 bg-gray-100 shadow-sm mb-2">
    <span className="grid">
      <span className="grid grid-cols-3 gap-3 mt-2">
        {type.map((a) => (
          <span
            className={`group flex flex-wrap justify-center items-center text-center flex-row p-2 rounded-lg transition-all duration-300 ease-linear hover:bg-brown ${query.category===a.name ? "text-white bg-brown rounded-3xl" : "bg-smoke shad text-gray-500"}`}
            key={a.name}
            onClick={()=>handleCat(a.name)}
          >
            {a.icon}
            <p className={`truncate group-hover:text-white group-hover:font-semibold ml-1 inline text-[.8rem] group-hover:drop-shadow-md ${query.category === a.name ? "text-white font-semibold" : "text-gray-400"}`}>
              {a.name}
            </p>
          </span>
        ))}
      </span>
    </span>
  );
};

export default PropertyType;
