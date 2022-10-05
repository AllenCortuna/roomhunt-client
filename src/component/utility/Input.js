import React from "react";

const Input = ({name,type,onChange,placeholder }) => {
  const formClass = "text-gray-500 min-w-[18rem] max-w-[23rem] font-regular mx-auto border-grey-400 border p-2 rounded focus:outline-none text-xs focus:text-gray-500 focus:border-green ";
  return (
    <input
      className={formClass}
      placeholder={placeholder}
      autoComplete="off"
      onChange={onChange}
    ></input>
  );
};

export default Input;

