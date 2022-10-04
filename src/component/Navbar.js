import React from "react";
import autoAnimate from "@formkit/auto-animate";
import { rightIcon } from "./utility/rightIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dom = React.useRef(null);
  const [showNav, setShowNav] = React.useState(false);

  React.useEffect(() => {
    dom.current && autoAnimate(dom.current);
  }, [dom]);
  const isSmallScreen = window.innerWidth <= 440;
  const content = [
    { name: "Home", desc: "/" },
    { name: "register", desc: "/register/client" },
    { name: "terms", desc: "/terms" },
    { name: "menu", desc: "/menu" },
  ];

  const logo = (
    <p className="text-gray-100 font-semibold text-[1.3rem] ">RoomHunt</p>
  );

  // WARN: Navbar
  const navlink =
    " text-[#fff] text-sm font-[700] transition-all ease-linear uppercase xs:hover:ml-5 duration-300 hover:text-amber-300";
  const nav = (
    <nav
      className={`grid gap-2 transition-all duration-300 ease-linear h-0 p-4 h-full ${
        !isSmallScreen && "grid-cols-4 p-5 py-1 justify-items-center"
      }`}
    >
      {content.map((a) => (
        <Link to={a.desc}>
          <p className={navlink}>{a.name}</p>
        </Link>
      ))}
    </nav>
  );

  // WARN: Small Screen
  const toggleCls =
    "w-5 bg-gray-200 transition-all duration-300 ease-linear h-1 rounded-md ";
  const smallScreen = (
    <>
      <div className="">
        <span className="font-[800] flex justify-between px-3 py-2 items-center">
          {logo}
          <span
            onClick={() => setShowNav(!showNav)}
            className="h-5 w-5 flex flex-wrap align-center justify-center "
          >
            <span
              className={`${toggleCls}${
                showNav && "h-5 border bg-gray-800 rotate-45 bg-transparent "
              }`}
            ></span>
            <span
              className={`${toggleCls}${
                showNav && "h-5 border -mt-4  rotate-45 bg-gray-200"
              }`}
            ></span>
          </span>
        </span>
      </div>
      {showNav && nav}
    </>
  );

  const otherScreen = (
    <div>
      <span className="flex flex-wrap justify-between px-3 py-2">
        {logo} {nav} {rightIcon}
      </span>
    </div>
  );

  return (
    <div
      className="bg-black space-mono grid w-screen h-auto shadow-lg "
      ref={dom}
    >
      {isSmallScreen ? smallScreen : otherScreen}
    </div>
  );
};

export default Navbar;
