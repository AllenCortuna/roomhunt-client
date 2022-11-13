import React from "react";
import report from "../img/warn.svg";
import message from "../img/message.svg";
import contact from "../img/mes.svg";
import review from "../img/review.svg";
import { CgMoreVertical } from "react-icons/cg";
import { Link } from "react-router-dom";

const AccMenu = () => {
  const items = [
    {
      icon: contact,
      name: "Contact Us",
      link: "/acc/roomlist",
      desc: "contact developer",
    },
    {
      icon: report,
      name: "Report Issue",
      link: "/upload",
      desc: "report bug",
    },
    {
      icon: review,
      name: "password",
      link: "/reset/acc",
      desc: "change password",
    },
    {
      icon: message,
      name: "Terms",
      link: "/terms",
      desc: "terms of use",
    },
  ];

  return (
    <div className="p-2 mt-24 md:mt-40 grid grid-cols-2 md:grid-cols-4 w-full gap-3 mx-auto max-w-[44rem]">
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
              className="w-[60%] m-auto drop-shadow-md"
            />
            <span className="flex flex-cols items-center">
              <span className="grid mb-0 mt-auto p-2">
                <p className="text-cyan-800 text-xs font-bold uppercase">
                  {item.name}
                </p>
                <p className=" text-gray-400 text-xs rale group-hover:text-gray-600">
                  {item.desc}
                </p>
              </span>
              <CgMoreVertical className="text-gray-500 drop-shadow-md mr-2 ml-auto mb-4 mt-auto text-md" />
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default AccMenu;
