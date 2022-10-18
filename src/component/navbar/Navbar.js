/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "./Nav";

const Navbar = () => {
  const [user, setUser] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("acc")) {
      setUser("acc");
    }
  }, []);
  return (
    <div>
      {user === "acc" && (
        <Nav
          content={[
            { name: "dashboard", desc: "/dashboard", action: "" },
            { name: "message", desc: "/message", action: "" },
            { name: "menu", desc: "/menu", action: "" },
            { name: "logout", desc: "/logout", action: "" },
          ]}
        />
      )}

      {user === "" && (
        <Nav
          content={[
            { name: "search", desc: "/", action: "" },
            { name: "register", desc: "/register", action: "" },
            { name: "about", desc: "/about", action: "" },
            { name: "contact", desc: "/contact", action: "" },
          ]}
        />
      )}
    </div>
  );
};

export default Navbar;
