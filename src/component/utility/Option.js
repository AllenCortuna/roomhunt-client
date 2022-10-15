import React from "react";

const Option = ({ handleOpt, option, label}) => {
  const optionLabel = "ml-1 text-xs text-gray-500 font-[500] mr-2";
  const selection =
    "border border-gray-200 text-xs font-semibold text-gray-400 rounded-md p-1 focus:outline-none text-center space-mono";

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
    <span className="border border-gray-200 shadow-sm rounded-md p-2 bg-gray-200">
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
