import React from "react";

export const FormHint = ({ text, icon }) => {
  return (
    <>
      <p className="text-zinc-500 text-xs text-left w-full font-semibold">
        {icon}
        {text}
      </p>
    </>
  );
};
