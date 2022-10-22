import React from "react";

const DateInput = ({ handleChange, date }) => {
  const formClass =
    "outline-none text-gray-500 w-full  border-primary border-2 bg-primary p-2 rounded focus:outline-none transition-all ease-linear duration-300 text-xs md:text-sm focus:bg-orange focus:text-gray-700 text-gray-400 font-[400] shadow-md space-mono";

  return (
    <>
      <input
        type="text"
        name="date"
        placeholder={date}
        className={formClass}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
        onChange={handleChange}
      />
    </>
  );
};

export default DateInput;
