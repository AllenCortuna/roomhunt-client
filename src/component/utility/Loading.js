import React from "react";
import animate from '../img/animate.svg'

const Loading = ({ text }) => {
  return (
    <div className="text-center grid  max-w-20 w-auto p-10 mx-auto my-auto">
      <span className="flex flex-wrap flex-row justify-center content-start flex-row mt-5 gap-5">
    <img src={animate} alt="https://loading.io/spinner/ellipsis/-speaking-discussion-text-ellipsis-typing-move" className="w-20"/>
        <p className="text-center text-md text-gray-500 font-bold my-auto truncate ">{text}</p>
      </span>
    </div>
  );
};

export default Loading;
