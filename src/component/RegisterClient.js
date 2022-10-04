import React, { useState } from "react";
import profile from "./img/profile.svg";
import Input from "./utility/Input";
import Date from "./utility/Date";

const RegisterClient = () => {
  const [page, usePage] = useState(1);

  const page1 = (
    <span className="flex flex-wrap flex-rows gap-[.3rem]">
      <Input
        name={"name"}
        type={"text"}
        placeholder={"name: eg John Doe"}
        // onChange={}
      />
      <Input
        name={"email"}
        type={"email"}
        placeholder={"email"}
        // onChange={}
      />
      <Input
        name={"contact"}
        type={"number"}
        placeholder={"contact number"}
        // onChange={}
      />
      {/* birthday */}
      <span className="min-w-[18rem] max-w-[23rem] flex justify-start mx-auto align-center">
        <p className="text-xs text-gray-400 inline font-[500] ml-1 mr-3 mt-1">
          Birthday:
        </p>
        <Date />
      </span>
    </span>
  );
  return (
    <div className="flex flex-wrap justify-center align-center pt-10 max-w-[30rem] mx-auto">
      <div className="text-center m-3 p-4 bg-white h-auto max-w-sm rounded-md shadow ">
        <img src={profile} alt="login" className="w-20 m-auto my-2 " />
        <h1 className=" font-semibold text-gray-500 text-md ">Register</h1>
        {page === 1 && page1}
        {page === 2 && page1}
      </div>
      {/* <p>{page}/3</p> */}
      <span className="w-[21rem] flex border flex-rows">
        {page > 1 && <button className="ml-0 mr-auto">prev</button>}
        {page < 3 && <button className="mr-0 ml-auto">next</button>}
      </span>
    </div>
  );
};

export default RegisterClient;
