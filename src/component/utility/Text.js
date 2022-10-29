import { BsInfoCircleFill } from "react-icons/bs";
import React from 'react'

export const formHint = (text) => {
  return (
    <>
      <p className=" mt-5 -mb-1 text-gray-500 text-[.65rem] text-left w-full capitalize font-semibold">
        <BsInfoCircleFill className="inline -mt-0.5 mr-1" />
        {text}
      </p>
    </>
  );
};


export const Header = ({text,style}) => {
  return (
    <h4 className={`font-semibold text-lg ${style}`}>{text}</h4>
  )
}
Header.defaultProps = {
  text: "",
  style: ""
}
