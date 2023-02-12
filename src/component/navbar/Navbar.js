import Nav from "./Nav";
import React, { useEffect } from "react";
import { useRegisterState } from "../../state/register";
import { FaUserCircle,FaQuestionCircle } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import {
  HiOutlineSearch,
} from "react-icons/hi";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import { BiDoorOpen, BiUserCircle } from "react-icons/bi";

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
            { name: "about", desc: "/about", icon: <FaQuestionCircle /> },
            // { name: "message", desc: "/message", icon: <BsFillChatRightQuoteFill/> },
            { name: "terms", desc: "/terms", icon: <BsFillChatRightQuoteFill/> },
            { name: "logout", desc: "/logout", icon: <FaUserCircle /> },
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
