import React from "react";

const InputVal = ({ type, onChange, placeholder, register, value }) => {
  const formClass =
    "outline-none text-gray-500 w-full  border-primary border-2 bg-primary p-2 rounded focus:outline-none transition-all ease-linear duration-300 text-xs md:text-sm focus:bg-brown hover:bg-primary focus:text-white placeholder:text-gray-400 font-[400] shad3";

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

InputVal.defaultProps = {
  register: null,
  onChange: null,
  placeholder: "",
}

export default InputVal;
