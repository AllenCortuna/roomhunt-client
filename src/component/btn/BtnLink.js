import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";

const BtnLink = ({ link, text, width }) => {
  return (
    <Link to={link}>
      <span className={`flex flex-wrap justify-center group hover:bg-brown  hover:shadow-sm rounded-full border-2 border-white shadow-md p-3 gap-2 bg-green max-w-auto mx-auto my-2 ${width}`}>
        <p className="text-sm text-white drop-shadow-md font-semibold ">{text}</p>

        <BsArrowRightCircleFill className="text-white text-md drop-shadow-md" />
      </span>
    </Link>
  );
};

export default BtnLink;
