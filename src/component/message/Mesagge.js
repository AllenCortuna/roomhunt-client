/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { messageStore } from "../../state/message";
import Chat from "./Chat";
import empty from "../img/mes.svg";
import Loading from "../utility/Loading";

const Mesagge = () => {
  // todo: display icon for message
  const acc = JSON.parse(localStorage.getItem("acc"))?.result;
  const client = JSON.parse(localStorage.getItem("client"))?.result;
  const profile = acc ? acc : client;
  const message = messageStore((state) => state.message);
  const loading = messageStore((state) => state.loading);
  const getRecieve = messageStore((state) => state.getRecieve);
  useEffect(() => {
    getRecieve(profile?._id);
  }, [getRecieve, profile?._id]);

  return profile ? (
    <span className="flex p-4 flex-col p-4 px-auto ">
      {/* <p>message</p> */}
      <div className="mx-auto mt-14 flex flex-wrap content-start  justify-center gap-5 md:gap-10 ">
        {message?.map((a) => (
          <Chat chat={a} key={a._id} />
        ))}
      </div>
    {loading && <Loading text={"Loading Message..."}/>} 
      {message?.length===0 && !loading && (
        <span className="grid mt-20 md:mt-28 mx-auto w-[20rem] p-4">
          <img src={empty} alt="empty" className="w-[45%] mx-auto drop-shadow-lg" />
          <h4 className="text-sm rale font-[600] text-cyan-800 text-center mt-5 drop-shadow-lg">
            No Message Available!
          </h4>
        </span>
      )}
    </span>
  ) : null;
};

export default Mesagge;
