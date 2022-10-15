import React from "react";

const Option = ({ handleOpt, option, label}) => {
  const optionLabel = "ml-1 text-xs text-gray-400 font-[500] mr-2";
  const selection =
    "capitalize text-xs font-semibold text-gray-500 rounded-sm p-1 focus:outline-none text-center space-mono ";

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
    <span className="border border-primary rounded-md p-1 bg-primary shad mb-2">
      <label className={optionLabel} id="opt">{label}</label>
      <select className={selection} onChange={(e)=> handleOpt(e.target.value)} >
        {option.map((a) => (
          <option value={a} >{a}</option>
        ))}
      </select>
    </span>
  );
};

export default Option;
