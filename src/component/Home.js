


import React from "react";
import { MdOutlineHouse } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import { RiHotelLine } from "react-icons/ri";
import  resort  from "./img/resort.svg";
import  hotel  from "./img/hotel.svg";
import  house  from "./img/house.svg";
const Home = () => {
  const iconClass =
    "text-[2rem] inline text-gray-500 hover:text-white ml-auto mr-auto";
  const icons = [
    {
      name: "Rentals",
      icon: <MdOutlineHouse className={` ${iconClass}`} />,
    },
    {
      name: "Hotel",
      icon: <RiHotelLine className={`${iconClass}`} />,
    },
    { name: "Resort", icon: <TbBeach className={`${iconClass}`} /> },
  ];
  const contents = [
    { name: "Rental Homes", img: house, desc: "Search for the boarding house or rental homes near your school or work." },
    { name: "Hotel", img: hotel, desc: "Avail the room that fits your needs." },
    { name: "Resort", img: resort, desc: "Find the best resort avialable." },
  ];

  return (
    <div className="flex grid grid-cols-1 place-items-center gap-2 p-5 mt-[3rem]">
      {/* category */}
      <div className="bg-white grid grid-cols-3 place-items-center w-[21rem] rounded-xl shadow-sm  border border-gray-200 p-8 py-3">
        {icons.map((icon) => (
          <span className="flex flex-wrap justify-center flex-col text-center center">
            <span className="center">
              {icon.icon}
              <p className="text-xs text-gray-400 font-600">{icon.name}</p>
            </span>
          </span>
        ))}
      </div>
{/* contents */}
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-3 gap-8 mt-5">
        {contents.map((content) => (
          <div className="shadow-md bg-white min-w-[20rem] max-w-[21rem] p-4 rounded-xl border-gray-200 border text-center h-[22rem] flex align-end flex-wrap flex-col">
            <img className="m-auto drop-shadow-md max-w-[15rem]" src={content.img} alt="content" />
            <h1 className="text-black space-mono font-bold mt-2 text-lg">{content.name}</h1>
            <p className=" text-gray-500 text-sm my-4">{content.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
