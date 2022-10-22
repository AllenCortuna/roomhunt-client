import React from "react";

const Option = ({ handleOpt, option, label }) => {
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
    <select className={selection} onChange={(e) => handleOpt(e.target.value)}>
      {option.map((a) => (
        <option value={a}>
          {a}
        </option>
      ))}
    </select>
  );
};

export default Option;
