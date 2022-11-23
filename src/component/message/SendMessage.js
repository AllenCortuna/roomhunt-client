import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillMessage } from "react-icons/ai";
import { messageStore } from "../../state/message";
import { useNavigate } from "react-router-dom";

const SendMessage = () => {
  const sendMessage = messageStore((state) => state.sendMessage);
  const loading = messageStore((state) => state.loading);
  const path = useLocation();

  const query = path.search;
  const sender = new URLSearchParams(query).get("sender");
  const senderId = new URLSearchParams(query).get("senderId");
  const reciever = new URLSearchParams(query).get("reciever");
  const recieverId = new URLSearchParams(query).get("recieverId");

  const [data, setdata] = useState({
    sender: String(sender),
    senderId: String(senderId),
    receiver: String(reciever),
    receiverId: String(recieverId),
    message: "",
  });

  useEffect(() => {
    setdata({
    sender: String(sender),
    senderId: String(senderId),
    receiver: String(reciever),
    receiverId: String(recieverId),
    message: "",
    });
  }, [reciever, recieverId, sender, senderId]);

  const handleMessage = (e) => {
    setdata({ ...data, message: e.target.value });
  };

  const navigate = useNavigate();
  const handleSend = async () => {
   console.log(data.message) 
   console.log(data.senderId) 
    if (data.message === "") {
      alert("No Message Content");
    } else {
      await sendMessage(data);
      navigate(-1);
    }
  };

  return (
    <span className="w-screen h-screen p-4 flex justify-center content-center">
      <div className=" min-w-[20rem] max-w-[24rem] py-4 p-3 border rounded-lg flex flex-col mx-auto mt-10 content-center justify-start gap-5 max-h-[24rem] bg-white md:mt-24 shadow-md">
        <h4 className="text-cyan-800 font-semibold">
          <AiFillMessage className="mr-1 inline" />
          Send Message
        </h4>
        <h4 className="text-zinc-500 text-xs font-semibold">
          To: <span>{reciever}</span>
        </h4>
        <textarea
          rows={50}
          cols={5}
          value={data.message}
          name="message"
          className="rale text-xs font-[500] text-zinc-500 p-3 bg-zinc-100 rounded-md focus:outline-none focus:shadow-md transition-all duration-300 ease-linear"
          onChange={handleMessage}
        />
        <button
          disabled={loading}
          onClick={handleSend}
          className={`w-auto mr-0 ml-auto p-2 px-4 rounded-md border-2 transition-all duration-300 shad ease-linear text-sm font-semibold ${
            loading
              ? "text-zinc-500 bg-none border-zinc-500"
              : "bg-secondary border-secondary text-zinc-600"
          }`}
        >
          {loading ? "sending..." : "send"}
        </button>
      </div>
    </span>
  );
};

export default SendMessage;
