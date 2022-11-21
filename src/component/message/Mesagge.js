/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { messageStore } from "../../state/message";
import Chat from "./Chat";

const Mesagge = () => {
  // todo: display icon for message
  const acc = JSON.parse(localStorage.getItem("acc"))?.result
  const client = JSON.parse(localStorage.getItem("client"))?.result
  console.log(acc._id)
  const profile = acc ? acc : client;
  const message = messageStore((state) => state.message);
  const getRecieve = messageStore((state) => state.getRecieve);
  useEffect(() => {
    getRecieve(profile?._id);
  },[getRecieve, profile?._id]);

  return profile ? (
    <span className="flex p-4 flex-col p-4 px-auto ">
      {/* <p>message</p> */}
      <div className="mx-auto mt-14 flex flex-wrap content-start  justify-center gap-5 md:gap-10 ">
        {message?.map((a) => (
          <Chat chat={a}/>
        ))}
      </div>
    </span>
  ) : null;
};

export default Mesagge;
