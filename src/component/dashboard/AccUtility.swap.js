import  upload  from '../img/upload.svg'
import React from "react";
import roomlist  from '../img/roomlist.svg'
const AccUtility = () => {
  const icon = "text-brown text-[6rem]";
  const items = [
    {
      icon: roomlist,
      name: "Roomlist",
      link: "",
      desc: "",
    },
    {
      icon: upload,  
      name: "Upload",
      link: "",
      desc: "",
    },
    { icon: "", name: "Transaction", link: "", desc: "" },
    { icon: "", name: "Review", link: "", desc: "" },
  ];
  return (
    <div className="flex gap-3 flex-wrap content-start w-[21rem] bg-primary rounded-md shadow h-[23rem] md:ml-0 md:mr-auto ">
      <span className="col-span-2 px-3 pt-3 w-full">
        <h2 className="text-cyan-800 text-sm font-bold">DASHBOARD</h2>
        <p className="text-gray-400 text-xs rale capitalize">
          settings and utility
        </p>
        <hr className="text-gray-400 w-full shadow-lg " />
      </span>

      {/* content */}
      <div className="grid grid-cols-2 w-full gap-4 p-4">
        {items.map((item) => (
          <span className="flex flex-col flex-wrap item-between h-[8rem] bg-white rounded-lg p-2">
            <img src={item.icon} alt="" className="w-[60%] mx-auto"/>
            <p className="text-gray-500 text-xs font-semibold">{item.name}</p>
          </span>
        ))}
      </div>
      <span className="bg-orange h-3 rounded-bl-md rounded-br-md mt-auto mb-0 col-span-2"></span>
    </div>
  );
};

export default AccUtility;
