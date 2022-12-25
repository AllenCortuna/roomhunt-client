import React from "react";
import { Link } from "react-router-dom";
import { HiExternalLink } from "react-icons/hi";

const BtnNavigate = ({ link, text, width }) => {
  return (
    <Link to={link}>
      <span className={`flex flex-wrap justify-center group  hover:shadow-sm rounded-lg border-2 border-white shadow-md p-4 gap-2 bg-zinc-700 max-w-auto mx-auto my-2 ${width}`}>
        <p className="text-sm text-white drop-shadow-md font-semibold ">{text}</p>

        <HiExternalLink className="text-white text-lg drop-shadow-md " />
      </span>
    </Link>
  );
};

export default BtnNavigate;
