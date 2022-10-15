import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { GiHouse } from "react-icons/gi";
import Review from "./Review";

const AccInfo = ({ user }) => {
  const icon = "text-[1rem] text-gray-500 inline ";
  const content = [
    {
      name: user.owner,
      icon: <FaUserCircle className={icon} />,
      text: "Owner",
    },
    {
      name: user.location,
      icon: <MdLocationOn className={icon} />,
      text: "Location",
    },
    {
      name: user.contact,
      icon: <AiFillPhone className={icon} />,
      text: "Contact",
    },
    {
      name: user.category,
      icon: <GiHouse className={icon} />,
      text: "Category",
    },
  ];
  return (
    <div className="grid justify-items-between w-[21rem] p-2 border border-gray-200 rounded-lg shadow-md bg-white h-auto">
      <img
        src={user.image}
        alt=""
        className="w-full rounded-md shadow-sm mb-2 "
      />
      {/* TODO: review */}
      {/* Business name */}
      <h1 className="text-gray-600 uppercase font-semibold ml-1 text-[1.1rem] ">
        {user?.businessName}
      </h1>
    <Review star={3.5}/>
      {/* TODO:update feature  */}
      {/* <MdMore className="text-[1.4rem] text-gray-500 mt-1 mr-0 ml-auto" /> */}
      <span className=" p-1">
        {content.map((a) => (
          <span className="grid mt-2">
            <span>
              {a.icon}
              <p className="uppercase ml-2 inline text-xs text-gray-500 font-semibold">{a.text}</p>
            </span>
            <p className="text-xs text-gray-500 ml-6">{a.name}</p>
          </span>
        ))}
      </span>
    </div>
  );
};

export default AccInfo;
