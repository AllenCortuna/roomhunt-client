/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useRegisterState } from "../../state/register";
import Nav from "./Nav";

const Navbar = () => {
  const login = useRegisterState((state) => state.login);
  const curUsr = useRegisterState((state) => state.curUsr);
  // set navbar content to acc pag refresh
  const acc = localStorage.getItem("acc")
  useEffect(() => {
    if (acc) {
      curUsr("acc")
    }
  }, [acc, login, curUsr]);

  return (
    <div>
      {login === "acc" ? (
        <Nav
          content={[
            { name: "dashboard", desc: "/dashboard" },
            { name: "message", desc: "/message" },
            { name: "menu", desc: "/menu" },
            { name: "logout", desc: "/logout" },
          ]}
        />
      ) : (
        <Nav
          content={[
            { name: "search", desc: "/" },
            { name: "login", desc: "/login" },
            { name: "register", desc: "/register" },
            { name: "menu", desc: "/menu" },
          ]}
        />
      )}
    </div>
  );
};

export default Navbar;
