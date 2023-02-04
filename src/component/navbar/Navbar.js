/* eslint-disable no-unused-vars */
import Nav from "./Nav";
import React, { useEffect } from "react";
import { useRegisterState } from "../../state/register";
import { MdSpaceDashboard, MdMarkEmailUnread } from "react-icons/md";
import { AiOutlineQuestionCircle, AiOutlineMessage } from "react-icons/ai";
import {
  HiSearch,
  HiOutlineInformationCircle,
  HiOutlineSearch,
} from "react-icons/hi";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiPencil, BiDoorOpen, BiUserCircle } from "react-icons/bi";
import { TiUser } from "react-icons/ti";

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
            {
              name: "dashboard",
              desc: "/acc/dashboard",
              icon: <MdSpaceDashboard />,
            },
            { name: "about", desc: "/about", icon: <BsInfoCircleFill /> },
            { name: "message", desc: "/message", icon: <MdMarkEmailUnread /> },
            { name: "logout", desc: "/logout", icon: <TiUser /> },
          ]}
        />
      )}
      {login === "client" && (
        <Nav
          content={[
            { name: "search", desc: "/search", icon: <HiOutlineSearch /> },
            {
              name: "account",
              desc: "/client/dashboard",
              icon: <BiUserCircle />,
            },
            { name: "message", desc: "/message", icon: <AiOutlineMessage /> },
            { name: "logout", desc: "/logout", icon: <BiDoorOpen /> },
          ]}
        />
      )}

      {login === "" && (
        <Nav
          content={[
            { name: "search", desc: "/search", icon: null },
            { name: "login", desc: "/login", icon: null },
            { name: "register", desc: "/register", icon: null },
            {
              name: "terms",
              desc: "/terms",
              icon: null,
            },
            {
              name: "about",
              desc: "/about",
              icon: null,
            },
          ]}
        />
      )}
    </div>
  );
};

export default Navbar;
