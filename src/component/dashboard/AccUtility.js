import React from "react";
import upload from "../img/upload.svg";
import message from "../img/message.svg";
import roomlist from "../img/roomlist.svg";
import review from "../img/review.svg";
import { CgMoreVertical } from "react-icons/cg";
import { Link } from "react-router-dom";
const AccUtility = () => {
  const items = [
    {
      icon: roomlist,
      name: "Roomlist",
      link: "/acc/roomlist",
      desc: "room info",
    },
    {
      icon: upload,
      name: "Upload",
      link: "/upload",
      desc: "upload rooms",
    },
    {
      icon: review,
      name: "terms",
      link: "/acc/account",
      desc: "terms and policy",
    },
    {
      icon: message,
      name: "message",
      link: "/message",
      desc: "see message",
    },
  ];

  return (
    <div className=" flex flex-wrap content-start w-[21rem] h-auto md:ml-5 md:mr-auto ">
      {/* content */}
      <div className=" grid grid-cols-2 w-full gap-4">
        {items.map((item) => (
          <Link to={item.link} key={item.name}>
            <span
              key={item}
              className="group grid h-[10.9rem] shadow-md bg-white border rounded-lg p-2 transition-all duration-300 ease-linear hover:bg-yellow hover:shadow-lg hover:border-2 hover:border-gray-200"
            >
              <img
                src={item.icon}
                alt=""
          loading="lazy"
                className="w-[64%] m-auto drop-shadow-lg "
              />
              <span className="flex flex-cols items-center">
                <span className="grid mb-0 mt-auto p-2">
                  <p className="text-cyan-800 text-xs font-bold uppercase">
                    {item.name}
                  </p>
                  <p className="md:text-sm text-gray-400 text-xs rale group-hover:text-gray-600 truncate">
                    {item.desc}
                  </p>
                </span>
                <CgMoreVertical className="text-gray-500 drop-shadow-md mr-2 ml-auto mb-4 mt-auto text-md" />
              </span>
            </span>
          </Link>
        ))}
    
      </div>
    </div>
  );
};

export default AccUtility;
