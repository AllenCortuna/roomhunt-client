import React from "react";

const Option = ({ handleOpt, option,value }) => {
  const selection =
    "capitalize text-xs font-semibold text-gray-500 rounded-md shad3 p-2 px-0 focus:outline-none text-center space-mono bg-primary w-full";

  return (
    <select className={selection} onChange={handleOpt} value={value}>
      {option.map((a) => (
        <option value={a} key={a}>
          {a}
        </option>
      ))}
    </select>
  );
};

export default Option;
