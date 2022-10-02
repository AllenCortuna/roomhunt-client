import React from "react";
import resort from "./img/resort.svg";
import hotel from "./img/hotel.svg";
import house from "./img/house.svg";
import Search from './Search'
const Home = () => {
  const contents = [
    {
      name: "Rental Homes",
      img: house,
      desc: "Search for the boarding house or rental homes near your school or work.",
    },
    { name: "Hotel", img: hotel, desc: "Avail the room that fits your needs." },
    { name: "Resort", img: resort, desc: "Find the best resort avialable." },
  ];

  return (
    <div className="grid grid-cols-1 place-items-center gap-2 p-5 mt-[3rem]">
      {/* search component */}
    <Search/>
      {/* contents */}
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-3 gap-8 mt-5">
        {contents.map((content) => (
          <div className="shadow-md bg-white min-w-[20rem] max-w-[21rem] p-4 rounded-xl border-gray-200 border text-center h-[22rem] flex align-end flex-wrap flex-col">
            <img
              className="m-auto drop-shadow-md max-w-[15rem]"
              src={content.img}
              alt="content"
            />
            <h1 className="text-black space-mono font-bold mt-2 text-lg">
              {content.name}
            </h1>
            <p className=" text-gray-500 text-sm my-4">{content.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
