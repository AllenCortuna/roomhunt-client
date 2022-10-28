import React from "react";
import { BiBuildings, BiHome } from "react-icons/bi";
import { TbBeach } from "react-icons/tb";

const PropertyType = ({ handleCat,query }) => {
  const iconClass =
    "text-[1.5rem] inline text-gray-500 group-hover:drop-shadow-md ";
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
    // <span className="grid rounded-tl-md rounded-tr-md p-3 pb-4 bg-gray-100 shadow-sm mb-2">
    <span className="grid">
      <span className="grid grid-cols-3 gap-2 mt-2">
        {type.map((a) => (
          <span
            className={`group flex flex-wrap justify-center items-center text-center flex-row p-2 rounded-2xl hover:bg- hover:shadow-none transition-all duration-300 ease-linear shad ${query.category===a.name ? "bg-yellow " : "bg-smoke"}`}
            key={a.name}
            onClick={()=>handleCat(a.name)}
          >
            {a.icon}
            <p className={`group-hover:text-gray-500 group-hover:font-semibold ml-2 inline text-[.8rem] group-hover:drop-shadow-md ${query.category === a.name ? "text-gray-500 font-semibold" : "text-gray-400"}`}>
              {a.name}
            </p>
          </span>
        ))}
      </span>
    </span>
  );
};

export default PropertyType;
