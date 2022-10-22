import React from "react";
// import {IoIosWarning} from 'react-icons/io'
 

const FormErr = ({text,err}) => {
  return (
    <span className={`flex flex-wrap justify-start items-start ml-1 mr-auto -mt-1 mb-2 rale  duration-200 transition-all ease-linear text-[.71rem] text-red-500 font-[400] ${err ? " h-auto": "h-0 hidden"} `}>
      {/* <IoIosWarning className="mr-2 mt-1 inline" /> */}
    {text}
    </span>
  );
};

export default FormErr;
 

