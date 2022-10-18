import React from "react";
import BtnLink from "../btn/BtnLink";
import acc from "../img/acc.svg";
import client from "../img/client.svg";

const Register = () => {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 md:mt-10 p-4 place-items-center max-w-[40rem]">
      <span className="h-[19rem] w-[19rem] grid grid-cols-1 place-content-between bg-white rounded-lg p-4 shadow-md text-center ">
        <img src={acc} alt="accommodator" className="w-[50%] mx-auto" />
        <span className="text-center p-2">
          <h1 className="uppercase text-md text-cyan-800 font-bold drop-shadow-md">
            accommodator
          </h1>
          <p className="text-gray-500 text-xs rale">
            {" "}
            Register as Accommodator to upload and mange rooms
          </p>
        </span>
        <BtnLink
          text={"register"}
          link={"/register/accommodator"}
          width={"w-[8rem]"}
        />
      </span>

      <span className="h-[19rem] w-[19rem] place-content-between grid grid-cols-1 bg-white rounded-lg p-4 shadow-md text-center ">
        <img src={client} alt="accommodator" className="w-[58%] mx-auto" />
        <span className="text-center p-2">
          <h1 className="uppercase text-md text-cyan-800 font-bold drop-shadow-md">
            Room Seekers
          </h1>
          <p className="text-gray-500 text-xs rale">
            {" "}
            Register as Client to reserve a room and send reviews
          </p>
        </span>
        <BtnLink
          text={"register"}
          link={"/register/client"}
          width={"w-[8rem]"}
        />
      </span>
    </div>
  );
};

export default Register;
