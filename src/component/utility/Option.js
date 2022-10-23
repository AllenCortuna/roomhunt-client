import React from "react";

const Option = ({ handleOpt, option }) => {
  const selection =
    "capitalize text-xs font-semibold text-gray-500 rounded-md shadow-md p-2 px-0 focus:outline-none text-center space-mono bg-primary";

  document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("opt");
    if (localStorage["job"]) {
      // if job is set
      input.value = localStorage["job"]; // set the value
    }
    input.onchange = function () {
      localStorage["job"] = this.value; // change localStorage on change
    };
  });
  return (
    <select className={selection} onChange={handleOpt}>
      {option.map((a) => (
        <option value={a} key={a}>
          {a}
        </option>
      ))}
    </select>
  );
};

export default Option;
