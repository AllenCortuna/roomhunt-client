/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import { Link } from "react-router-dom";
import { Logo } from "./content";

const Nav = ({ content }) => {
  const isSmallScreen = window.innerWidth <= 440;
  const dom = React.useRef(null);
  const [showNav, setShowNav] = React.useState(false);

  useEffect(() => {
    dom.current && autoAnimate(dom.current);
  }, [dom, isSmallScreen]);

  const navlink =
    " font-[800] uppercase  my-auto";
  const nav = (
    <nav
      className={`p-3 md:p-0 flex flex-col sm:justify-start md:flex-row transition-all duration-300 ease-linear gap-3 lg:gap-4 md:my-auto`}
    >
      {content.map((a) => (
        <Link
          to={a.desc}
          key={a.name}
          className="p-2 flex flex-cols justify-start content-start group gap-1 text-white hover:text-zinc-800 hover:px-4 hover:bg-secondary rounded-full w-auto transition-all ease-linear duration-300 text-sm"
          onClick={() => {
            setShowNav(false);
          }}
        >
        <span className="mt-[.2rem]">
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
          <Logo/>
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
          <Logo/>
        </span>
        {nav}
      </span>
    </div>
  );

  return (
    <div className="bg-zinc-800 grid w-screen h-auto py-1 shadow border-b " ref={dom}>
      {isSmallScreen ? smallScreen : otherScreen}
    </div>
  );
};

export default Nav;
