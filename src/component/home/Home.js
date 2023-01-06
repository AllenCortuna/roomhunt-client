import logo from "../img/roomhunt_logo.png";
import room from "../img/room.jpg";
import resort from "../img/client.svg";

import React from "react";
import BtnNavigate from "../btn/BtnNavigate";
// import FeaturedAcc from "./FeaturedAcc";
const Home = () => {
  return (
    <div className="w-full h-auto flex flex-wrap gap-10  justify-center">
    {/* first content */}
      <span className="flex flex-col max-w-[24rem] gap-2 pt-10 md:pt-24 p-2 md:p-5  justify-center mx-auto text-center">
        <img
          src={room}
          alt="room"
          className="rounded-tl-2xl rounded-tr-2xl rounded-md shad"
        />
        <span className=" w-36  bg-zinc-200 rounded-full mx-auto -mt-20 p-5 z-50 shad mb-5">
          <img src={logo} alt="logo" className="" />
        </span>
        <h5 className="text-[2rem] mon font-[900] text-cyan-900 drop-shadow-lg">
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

      {/* SECOND CONTENT */}
      <span className="flex flex-col max-w-[24rem] gap-2 pt-10 md:pt-24 p-5 justify-center mx-auto text-center">
        <img
          src={resort}
          alt="logo"
          className="drop-shadow-lg w-full mx-auto mb-5 drop-shad"
        />
        {/* <span className="bg-zinc-600 h-20 w-full rounded-xl"></span> */}
        <h5 className="text-[1.2rem] md:text-[1.5rem] font-[800] text-cyan-900 drop-shadow-lg">
          Register or Sign-Up
        </h5>

        <p className="rale text-md md:text-lg text-zinc-600">
          Register your business and start uploading all your rooms. Verified
          Accommodators can access deifferent features likes recieving messages,
          reviews and monitoring of rooms. Client can send reviewsand messages.
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
