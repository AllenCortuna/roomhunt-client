
import React from "react";
import BtnLink from "../btn/BtnLink";
import acc from "../img/acc.svg";
import client from "../img/client.svg";

const Login = () => {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 md:mt-10 p-4 place-items-center max-w-[40rem]">
      <span className="h-[19rem] w-[19rem] grid grid-cols-1 place-content-between bg-white rounded-lg p-4 shadow-md text-center ">
        <img src={acc} loading="lazy" alt="accommodator" className="w-[50%] mx-auto" />
        <span className="text-center p-2">
          <h1 className="uppercase text-md text-cyan-800 font-bold drop-shadow-md">
            accommodator
          </h1>
          <p className="text-gray-500 text-xs rale">
            {" "}
            Login as Accommodator 
          </p>
        </span>
        <BtnLink
          text={"login"}
          link={"/login/acc"}
          width={"w-[8rem]"}
        />
      </span>

      <span className="h-[19rem] w-[19rem] place-content-between grid grid-cols-1 bg-white rounded-lg p-4 shadow-md text-center ">
        <img src={client} loading="lazy" alt="accommodator" className="w-[58%] mx-auto" />
        <span className="text-center p-2">
          <h1 className="uppercase text-md text-cyan-800 font-bold drop-shadow-md">
            Room Seekers
          </h1>
          <p className="text-gray-500 text-xs rale">
            {" "}
            Login as Client 
          </p>
        </span>
        <BtnLink
          text={"login"}
          link={"/login/client"}
          width={"w-[8rem]"}
        />
      </span>
    </div>
  );
};

export default Login;
