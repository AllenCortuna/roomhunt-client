import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterState } from "../../state/register";
import decode from "jwt-decode";

const AccInfo = () => {
  
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("acc")));
  const logOut = useRegisterState((state) => state.logOut);

  useEffect(() => {
    const logout = () => {
      logOut();
      navigate.push("/acc/login");
      setUser(null);
    };
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage?.getItem("acc")));
  }, [logOut, navigate, user.token]);

  
  return (
    <div className="grid gap-1 grid-cols-2 justify-items-between max-w-[21rem] border rounded-lg shadow-md bg-white h-auto mx-auto pb-4">
      <img
        src={user?.result.image}
        alt=""
        loading="lazy"
        className="w-full mx-auto col-span-2  rounded-tr-md rounded-tl-md h-[12.5rem] object-cover border-zinc-300 "
      />
      {/* Business name */}
      <span className="spacing-0 col-span-2 text-center">
        <h1 className="text-cyan-900 capitalize font-bold text-[1.5rem] inline">
          {user?.result.businessName}
        </h1>
        <p className="inline truncate text-xs text-gray-500 rale "> {user?.result.category}</p>
    <br/>
        <MdLocationOn className="mr-1 inline text-sm text-gray-400" />
        <p className=" inline text-center text-xs text-gray-600 capitalize rale">
          {user?.result.location}
        </p>
        <hr className="w-auto mt-2 ml-2 mr-2 text-gray-400 shadow-md" />
      </span>

      <span className="p-2">
        <h1 className="text-xs text-cyan-800 font-bold uppercase ">
          <MdEmail className="text-[1rem] mr-1 inline" />
          contact
        </h1>
        <p className=" ml-3 inline text-xs text-gray-500 rale truncate">{user?.result.email}</p>
        <p className=" ml-3 truncate text-xs text-gray-500 rale ">{user?.result.contact}</p>
      </span>

      <span className=" p-2">
        <h1 className="text-xs text-cyan-800 font-bold uppercase ">
          <AiFillCheckCircle className="text-[1rem] mr-1 inline" />
          Owner
        </h1>
        <p className=" truncate ml-4 inline text-xs text-gray-500 rale">{user?.result.owner}</p>

        <p className="drop-shadow-sm text-xs space-mono font-[900] ml-4 truncate">
          {user?.result.verified ? (
            <span className="text-lime-500">verifed</span>
          ) : (
            <span className="text-rose-500">unverifed</span>
          )}
        </p>
      </span>
      {/* TODO: review */}
      {/* TODO:update feature  */}
    </div>
  );
};

export default AccInfo;
