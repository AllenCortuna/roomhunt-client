import React from "react";

const ProcessIndicator = ({ page }) => {
  const squircle = "bg-zinc-600 rounded-xl shadow-sm h-5 w-5 flex border-2 border-zinc-600"
  return (
    <div className="w-15 h-auto p-0 m-auto flex justify-center flex-row gap-5">
      <span className={`${squircle} ${page>=1 && "bg-cyan-500"}`}></span>
      <span className={`${squircle} ${page>=2 && "bg-cyan-500"}`}></span>
      <span className={`${squircle} ${page>=3 && "bg-cyan-500"}`}></span>
    </div>
  );
};

export default ProcessIndicator;
