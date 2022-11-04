import React from "react";
import { useLocation } from "react-router-dom";
import AccMenu from "./AccMenu";
import ClientMenu from "./ClientMenu";

const Menu = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/client/menu" ? <ClientMenu /> : <AccMenu />}
    </div>
  );
};

export default Menu;
