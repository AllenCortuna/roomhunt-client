import React from "react";
import wait from '../img/wait.svg'


const Loading = ({ text }) => {
  return (
    <div className="text-center flex flex-wrap flex-cols justify-center w-full p-10 mx-auto my-auto">
    <img src={wait} alt="loading" className="mx-auto w-[80%] animate-bounce"/>
      <p className="text-center text-gray-500 animate-pulse font-bold w-[100%]">{text}</p>
    </div>
  );
};

export default Loading;
