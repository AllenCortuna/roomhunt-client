/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useRegisterState } from "../../state/register";
import Nav from "./Nav";

const Navbar = () => {
  const login = useRegisterState((state) => state.login);
  const curUsr = useRegisterState((state) => state.curUsr);
  // set navbar content to acc pag refresh
  const acc = localStorage.getItem("acc")
  const client = localStorage.getItem("client")
  useEffect(() => {
    if (acc) {
      curUsr("acc")
    }
    if (client) {
      curUsr("client")
    }
  }, [acc,client, login, curUsr]);

  return (
    <div>
      {login === "acc" && (
        <Nav
          content={[
            { name: "dashboard", desc: "/acc/dashboard" },
            { name: "menu", desc: "/acc/menu" },
            { name: "about", desc: "/about" },
            { name: "logout", desc: "/logout" },
          ]}
        />
      )}
      {login === "client" && (
        <Nav
          content={[
            { name: "search", desc: "/" },
            { name: "account", desc: "/client/dashboard" },
            { name: "menu", desc: "/client/menu" },
            { name: "logout", desc: "/logout" },
            
          ]}
        />
      )}
    
      {login === "" && (
        <Nav
          content={[
            { name: "search", desc: "/" },
            { name: "login", desc: "/login" },
            { name: "register", desc: "/register" },
            { name: "about", desc: "/about" },
          ]}
        />
      )}
    </div>
  );
};

export default Navbar;
