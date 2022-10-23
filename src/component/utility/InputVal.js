import React from "react";

const InputVal = ({ type, onChange, placeholder, register, value }) => {
  const formClass =
    "outline-none text-gray-500 w-full  border-primary border-2 bg-primary p-2 rounded focus:outline-none transition-all ease-linear duration-300 text-xs md:text-sm focus:bg-orange hover:bg-primary focus:text-gray-700 placeholder:text-gray-400 font-[400] shadow-md";

  return (
    <span className="w-full h-auto grid">
      <input
        className={formClass}
        // name={name}
        type={type}
        value={value}
        {...register}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </span>
  );
};

export default InputVal;