/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
// import { rightIcon } from "./utility/rightIcon";
import { Link } from "react-router-dom";
import { logo } from "./content";

const Nav = ({ content }) => {
  const isSmallScreen = window.innerWidth <= 440;
  const dom = React.useRef(null);
  const [showNav, setShowNav] = React.useState(false);

  useEffect(() => {
    dom.current && autoAnimate(dom.current);
  }, [dom, isSmallScreen]);

  const navlink =
    " text-xs font-[800] uppercase  my-auto";
  const nav = (
    <nav
      className={`p-3 md:p-0 flex flex-col md:flex-row transition-all duration-300 ease-linear md:gap-1 md:my-auto`}
    >
      {content.map((a) => (
        <Link
          to={a.desc}
          key={a.name}
          className="p-2 flex flex-cols justify-start content-start group gap-2 text-white hover:text-zinc-800 hover:bg-cyan-100 rounded-full w-auto transition-all ease-linear duration-300 "
          onClick={() => {
            setShowNav(false);
          }}
        >
        <span className="">
          {a.icon}
        </span>
          <p className={navlink}>{a.name}</p>
        </Link>
      ))}
    </nav>
  );

  // WARN: Small Screen
  const toggleCls =
    "w-6 bg-gray-200 transition-all duration-300 ease-linear h-1 rounded-md ";
  const smallScreen = (
    <>
      <div className="">
        <span className="my-auto font-[800] flex justify-between px-3 py-2 items-center">
          {logo}
          <span
            onClick={() => setShowNav(!showNav)}
            className="h-6 w-6 flex flex-wrap align-center justify-center my-auto"
          >
            <span
              className={`${toggleCls}${
                showNav && "h-6 border rotate-45 bg-transparent"
              }`}
            ></span>
            <span
              className={`${toggleCls}${
                showNav && "h-6 border -mt-4  rotate-45 bg-zinc-200"
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
      <span className="flex flex-wrap justify-between px-10 py-2">
        <span className="flex flex-wrap gap-3">
          {logo}
        </span>
        {nav}
      </span>
    </div>
  );

  return (
    <div className="bg-zinc-800 grid w-screen h-auto shad" ref={dom}>
      {isSmallScreen ? smallScreen : otherScreen}
    </div>
  );
};

export default Nav;
