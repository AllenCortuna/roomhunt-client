import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SendMessage = () => {
  const path = useLocation();
  const query = path.search;
  const sender = new URLSearchParams(query).get('sender');
  const senderId = new URLSearchParams(query).get('senderId');
  const reciever = new URLSearchParams(query).get('reciever');
  const recieverId = new URLSearchParams(query).get('recieverId');
  
  const [data, setdata] = useState({
    sender: sender,
    senderId: senderId,
    receiver: reciever,
    receiverId: recieverId,
  });
  
  useEffect(() => {
    setdata(query);
  },[query]);
  console.log("data",data);

  return <div className="">SendMessage</div>;
};

export default SendMessage;
