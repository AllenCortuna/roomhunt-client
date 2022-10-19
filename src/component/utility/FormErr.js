import React from "react";
 

const FormErr = ({text,err}) => {
  return (
    <span className={` ml-1 mb-2 rale duration-200 transition-all ease-linear text-xs text-red-500 font-[400] ${err ? "scale-y-100 h-auto": "scale-y-0 h-0"} `}>
    {text}
    </span>
  );
};

export default FormErr;
 

