import React from "react";
import Chat from "./Chat";

const Mesagge = () => {
  // todo: display icon for message

  return (
    <span className="flex p-4 flex-col p-4 px-auto ">
      {/* <p>message</p> */}
      <div className="mx-auto mt-14 flex flex-wrap content-start  justify-center gap-5 md:gap-10 ">
        <Chat
          text={
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          }
          sender={"kd"}
        />
        <Chat
          text={
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet"
          }
          sender={"zen"}
        />
      </div>
    </span>
  );
};

export default Mesagge;
