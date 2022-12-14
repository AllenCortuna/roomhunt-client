import React from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BtnLink = () => {
  const navigate = useNavigate();
  return (
    <span onClick={() => navigate(-1)}>
      <span
        className={`flex flex-wrap justify-center group hover:bg-brown  hover:shadow-sm rounded-lg border-2 border-white shadow-md p-3 gap-2 bg-zinc-700 max-w-auto mx-auto my-2 mb-14 w-24`}
      >
        <BsArrowLeftCircleFill className="text-white text-md drop-shadow-md" />
        <p className="text-sm text-white drop-shadow-md font-semibold ">back</p>
      </span>
    </span>
  );
};

export default BtnLink;
