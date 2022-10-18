import React from "react";

const Input = ({ type, onChange, placeholder, register }) => {
  const formClass = "mt-2 shad outline-none text-gray-500 min-w-[18rem] max-w-[23rem] font-normal border-primary border-2 bg-primary p-2 rounded focus:outline-none transition-all ease-linear duration-300 text-xs md:text-sm focus:bg-brown focus:text-white placeholder:text-gray-400 focus:font-[500] rale";

  return (
    <input
      className={formClass}
      // name={name}
      type={type}
      {...register}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};

export default Input;
