import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterState } from "../state/register";
import Button from "./btn/Button";

const Logout = () => {
  const navigate = useNavigate();

  const logOut = useRegisterState((state) => state.logOut);
  return (
    <div className="grid grid-cols-2 place-items-center p-4 mt-40 gap-5 min-w-[18rem] max-w-[24rem]">
      <span className="col-span-2 text-center">
        <h1 className="font-bold uppercase text-cyan-800 text-xl drop-shadow-md ">
          logout
        </h1>
        <p className="text-sm text-gray-400 rale">Logout and clear session ?</p>
      </span>
      <Button
        color={
          "bg-none border-2 border-gray-500 text-gray-400 shadow-none"
        }
        loading={false}
        text={"cancel"}
        onClick={() => {
          navigate(-1);
        }}
      />

      <Button
        color={
          "border-2 bg-error shadow-md text-gray-100 "
        }
        loading={false}
        text={"Logout"}
        onClick={() => {
          logOut(navigate);
        }}
      />
    </div>
  );
};

export default Logout;
