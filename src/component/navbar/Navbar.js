/* eslint-disable no-unused-vars */
import Nav from "./Nav";
import React, { useEffect } from "react";
import { useRegisterState } from "../../state/register";

import { RiFileSearchFill } from 'react-icons/ri'
import { MdSpaceDashboard } from 'react-icons/md'
import {  CgMenuGridR} from 'react-icons/cg'
import {  RiLogoutBoxRFill} from 'react-icons/ri'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import { FaHouseUser, FaUserCircle} from 'react-icons/fa'

const Navbar = () => {
  const login = useRegisterState((state) => state.login);
  const curUsr = useRegisterState((state) => state.curUsr);
  // set navbar content to acc pag refresh
  const acc = localStorage.getItem("acc");
  const client = localStorage.getItem("client");
  const icon = "text-white group-hover:text-amber-300 mr-2"
  useEffect(() => {
    if (acc) {
      curUsr("acc");
    }
    if (client) {
      curUsr("client");
    }
  }, [acc, client, login, curUsr]);

  return (
    <div>
      {login === "acc" && (
        <Nav
          content={[
            { name: "dashboard", desc: "/acc/dashboard",icon: <MdSpaceDashboard className={icon}/> },
            { name: "menu", desc: "/acc/menu" , icon: <CgMenuGridR className={icon}/> },
            { name: "about", desc: "/about", icon: <BsFillInfoSquareFill className={icon}/> },
            { name: "logout", desc: "/logout", icon: <RiLogoutBoxRFill className={icon}/> },
          ]}
        />
      )}
      {login === "client" && (
        <Nav
          content={[
            { name: "search", desc: "/", icon:<RiFileSearchFill className={icon}/> },
            { name: "account", desc: "/client/dashboard", icon: <MdSpaceDashboard className={icon}/> },
            { name: "menu", desc: "/client/menu" , icon: <CgMenuGridR className={icon}/> },
            { name: "logout", desc: "/logout", icon: <RiLogoutBoxRFill className={icon}/> },
          ]}
        />
      )}

      {login === "" && (
        <Nav
          content={[
            { name: "search", desc: "/", icon:<RiFileSearchFill className={icon}/> },
            { name: "login", desc: "/login",icon: <FaUserCircle className={icon}/> },
            { name: "register", desc: "/register", icon: <FaHouseUser className={icon}/> },
            { name: "about", desc: "/about", icon: <BsFillInfoSquareFill className={icon}/> },
          ]}
        />
      )}
    </div>
  );
};

export default Navbar;
