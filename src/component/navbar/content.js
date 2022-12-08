import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useRegisterState } from "../../state/register";
import roomhunt_logo from "../img/roomhunt_logo.png";

export const Logo = () => {
  const login = useRegisterState((state) => state.login);
  const curUsr = useRegisterState((state) => state.curUsr);
  // set navbar content to acc pag refresh
  const acc = localStorage.getItem("acc");
  const client = localStorage.getItem("client");
  const [link, setlink] = useState("/")
  useEffect(() => {
    if (acc) {
      setlink("/acc/dashboard")
    }
    if (client) {
      setlink("/search");
    }
  }, [acc, client, login, curUsr]);
  

  return (
    <Link to={link}>
      <span className="flex flex-wrap flex-rows items-center gap-2">
        <img src={roomhunt_logo} alt="logo" className=" w-8 my-auto" />
        <h3 className="text-white uppercase text-xl font-[800] hidden md:block my-auto">
          roomhunt
        </h3>
      </span>
    </Link>
  );
};
