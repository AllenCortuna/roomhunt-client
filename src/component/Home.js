import React from "react";
import resort from "./img/resort.svg";
import hotel from "./img/hotel.svg";
import house from "./img/house.svg";
import Search from "./Search";
import {
  container,
  contentContainer,
  content,
  contentImg,
  contentName,
  contentDesc,
} from "./style/home.js";

// NOTE:all className are in ./style/home.js dir
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
    <div className={container}>
      {/* search component */}
      <Search />
      {/* contents */}
      <div className={contentContainer}>
        {contents.map((cont) => (
          <div className={content} key={cont.name}>
            <img className={contentImg} src={cont.img} alt="content" />
            <h1 className={contentName}>{cont.name}</h1>
            <p className={contentDesc}>{cont.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
