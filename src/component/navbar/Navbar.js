/* eslint-disable no-unused-vars */
import Nav from "./Nav";
import React, { useEffect } from "react";
import { useRegisterState } from "../../state/register";
import { RiFileSearchFill } from 'react-icons/ri'
import { MdSpaceDashboard } from 'react-icons/md'
// import {  CgMenuGridR} from 'react-icons/cg'
import {  RiLogoutBoxRFill} from 'react-icons/ri'
import { BsInfoCircleFill } from 'react-icons/bs'
import { FaHouseUser, FaUserCircle} from 'react-icons/fa'

const Navbar = () => {
  const login = useRegisterState((state) => state.login);
  const curUsr = useRegisterState((state) => state.curUsr);
  // set navbar content to acc pag refresh
  const acc = localStorage.getItem("acc");
  const client = localStorage.getItem("client");
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
            { name: "dashboard", desc: "/acc/dashboard",icon: <MdSpaceDashboard /> },
            { name: "about", desc: "/about", icon: <BsInfoCircleFill /> },
            { name: "logout", desc: "/logout", icon: <RiLogoutBoxRFill /> },
          ]}
        />
      )}
      {login === "client" && (
        <Nav
          content={[
            { name: "search", desc: "/", icon:<RiFileSearchFill /> },
            { name: "account", desc: "/client/dashboard", icon: <MdSpaceDashboard /> },
            { name: "logout", desc: "/logout", icon: <RiLogoutBoxRFill /> },
          ]}
        />
      )}

      {login === "" && (
        <Nav
          content={[
            { name: "search", desc: "/", icon:<RiFileSearchFill /> },
            { name: "login", desc: "/login",icon: <FaUserCircle /> },
            { name: "register", desc: "/register", icon: <FaHouseUser /> },
            { name: "about", desc: "/about", icon: <BsInfoCircleFill /> },
          ]}
        />
      )}
    </div>
  );
};

export default Navbar;
