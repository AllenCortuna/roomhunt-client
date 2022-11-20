import React from "react";

const Chat = ({ sender, text }) => {
  return (
    <span className="flex gap-3 flex-row content-start justify-start sm:w-[16rem] md:max-w-[20rem] rounded bg-amber-100 rounded-lg p-3 whitespace-wrap shadow">
      <span className="flex flex-cols justify-start content-center mt-[.5]">
        <span className="rounded-full h-8 w-8 bg-zinc-600 text-white text-2xl font-bold text-center flex justify-center content-center uppercase ">
          {sender.charAt(0)}
        </span>
      </span>
      <h4 className="text-xs text-zinc-500 rale">{text}</h4>
    {/* todo: delete reply */}
    </span>
  );
};

export default Chat;
