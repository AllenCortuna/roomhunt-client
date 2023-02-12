import React from "react";
import GooglePay from "./GooglePay";
import no from '../img/utility.jpg'

const Subcribe = () => {
  return (
    <div className="w-[21rem] md:w-[24rem] bg-white p-5 border rounded-lg shadow-lg flex flex-wrap flex-col h-auto justify-center content-center">
    <img src={no} alt="no" />
      <h4 className="text-cyan-900 font-[700] mx-auto text-lg ">
        30 Days PRO Access (Php 200)
      </h4>
      <h3 className="rale text-zinc-500 text-center">
        and have the access to the following feature: <b className="drop-shadow-md">Upload rooms, Monitor views, View room ratings and Chat with Room Seeker</b>
      </h3>

      <span className="mx-auto my-4">
        <GooglePay />
      </span>
    </div>
  );
};

export default Subcribe;
