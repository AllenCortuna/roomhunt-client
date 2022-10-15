import React from "react";

const Input = ({ type, onChange, placeholder, register }) => {
  const formClass = "shadow-sm outline-none text-gray-500 min-w-[18rem] max-w-[23rem] font-normal border-gray-200 border-2 bg-gray-200 p-2 rounded focus:outline-none focus:text-gray-500 transition-all ease-linear duration-300 text-xs md:text-sm focus:border-orange active:text-gray-500";
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
