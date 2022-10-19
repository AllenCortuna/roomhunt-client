import React from "react";
import upload from "../img/upload.svg";
import message from "../img/message.svg";
import roomlist from "../img/roomlist.svg";
import review from "../img/review.svg";
const AccUtility = () => {
  const items = [
    { 
      icon: roomlist,
      name: "Roomlist",
      link: "/",
      desc: "manage room"
    },
    {
      icon: upload,
      name: "Upload",
      link: "",
      desc: "upload rooms"
    },
    { 
      icon: message,
      name: "message", 
      link: "", 
      desc: "see mesagge"
    },
    { 
      icon: review,
      name: "Review", 
      link: "", 
      desc: "see client feedback" 
    },
  ];
  return (
    <div className=" flex flex-wrap content-start w-[21rem] h-[26rem] md:ml-0 md:mr-auto ">
      {/* content */}
      <div className=" grid grid-cols-2 w-full gap-4">
        {items.map((item) => (
          <span key={item.name} className="group grid h-[10.9rem] shadow-md bg-primary rounded-lg p-2 transition-all duration-300 ease-linear hover:bg-yellow hover:shadow-lg hover:border-2 hover:border-gray-200">
            <img
              src={item.icon}
              alt=""
              className="w-[60%] m-auto drop-shadow-md"
            />
            <span className="grid mb-0 mt-auto p-2">
              <p className="text-cyan-800 text-xs font-bold uppercase">
                {item.name}
              </p>
              <p className="md:text-sm text-gray-400 text-xs rale group-hover:text-gray-600">{item.desc}</p>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default AccUtility;
