import logo from "../img/roomhunt_logo.png";
import resort from "../img/resort.svg";

import React from "react";
import BtnNavigate from "../btn/BtnNavigate";
// import FeaturedAcc from "./FeaturedAcc";
const Home = () => {
  return (
    <div className="w-full h-auto p-5 flex flex-wrap gap-10 pt-10 md:pt-24 justify-center">
      <span className="flex flex-col max-w-[22rem] gap-2 justify-center mx-auto text-center">
        <img src={logo} alt="logo" className="drop-shadow-lg  mx-auto w-40" />
        <h5 className="text-[2rem] font-[800] text-cyan-900 drop-shadow-lg">
          ROOMHUNT
        </h5>
        <p className="rale text-md md:text-lg text-zinc-600">
          RoomHunt is an Accommodation platform that showcase small business
          like Resort, Hotel and Dorms. Home Seekers can search rooms that fit
          their needs based on price, location and etc.
        </p>
        <span className="w-48 mx-auto mb-10">
          <BtnNavigate link={"/search"} text="Search Rooms" />
        </span>
      </span>
      <span className="flex flex-col max-w-[22rem] gap-2 justify-center mx-auto text-center">
        <img
          src={resort}
          alt="logo"
          className="drop-shadow-lg md:w-[15rem] w-[10rem] mx-auto"
        />
        <h5 className="text-[1.2rem] md:text-[1.5rem] font-[800] text-cyan-900 drop-shadow-lg">
          Register or Sign-up
        </h5>

        <p className="rale text-md md:text-lg text-zinc-600">
          Register your business and start uploading all your rooms. Verified
          Accommodators can access deifferent features likes reciving messages,
          reviews and monitoring of rooms.{" "}
        </p>
        <span className="w-36 mx-auto mb-10">
          <BtnNavigate link={"/register"} text="Register" />
        </span>
      </span>
      {/* <span className="w-full"> */}
      {/*   <FeaturedAcc /> */}
      {/* </span> */}
    </div>
  );
};

export default Home;
