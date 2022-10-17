import React from "react";

const Input = ({ type, onChange, placeholder, register }) => {
  const formClass = "mt-2 shadow-md outline-none text-gray-600 min-w-[18rem] max-w-[23rem] font-normal border-primary border-2 bg-primary p-2 rounded focus:outline-none focus:text-gray-500 transition-all ease-linear duration-300 text-xs md:text-sm focus:border-orange";

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
