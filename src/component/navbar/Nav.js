/* eslint-disable no-unused-vars */
import React from "react";
import autoAnimate from "@formkit/auto-animate";
// import { rightIcon } from "./utility/rightIcon";
import { Link } from "react-router-dom";
import { logo } from "./content";

const Nav = ({ content }) => {
  const isSmallScreen = window.innerWidth <= 440;
  const dom = React.useRef(null);
  const [showNav, setShowNav] = React.useState(false);

  React.useEffect(() => {
    dom.current && autoAnimate(dom.current);
  }, [dom, isSmallScreen]);

  // WARN: Navbar
  const navlink =
    " text-[#fff] text-xs font-[700] transition-all ease-linear uppercase duration-300 group-hover:text-amber-300 my-auto group-hover:underline ";
  const nav = (
    <nav
      className={`grid transition-all duration-300 ease-linear p-4 gap-5 md:gap-8 pb-8 md:grid-cols-4 p-5 md:py-1 md:justify-items-center md:my-auto md:pb-0 `}
    >
      {content.map((a) => (
        <Link
          to={a.desc}
          key={a.name}
          className="flex flex-cols justify-start content-start group gap-3  text-white hover:text-amber-300"
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
    "w-5 bg-gray-200 transition-all duration-300 ease-linear h-1 rounded-md ";
  const smallScreen = (
    <>
      <div className="">
        <span className="font-[800] flex justify-between px-3 py-2 items-center">
          {logo}
          <span
            onClick={() => setShowNav(!showNav)}
            className="h-5 w-5 flex flex-wrap align-center justify-center my-auto"
          >
            <span
              className={`${toggleCls}${
                showNav && "h-5 border rotate-45 bg-transparent"
              }`}
            ></span>
            <span
              className={`${toggleCls}${
                showNav && "h-5 border -mt-4  rotate-45 bg-zinc-200"
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
          <h3 className="text-white text-xl font-[800]">roomhunt</h3>
        </span>
        {nav}
      </span>
    </div>
  );

  return (
    <div className="bg-zinc-800 grid w-screen h-auto shad " ref={dom}>
      {isSmallScreen ? smallScreen : otherScreen}
    </div>
  );
};

export default Nav;
