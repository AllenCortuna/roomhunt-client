import React from "react";
import GooglePay from "./GooglePay";

const Subcribe = () => {
  return (
    <div className="w-[21rem] bg-white p-5 border rounded-lg shadow-lg flex flex-wrap flex-col h-auto justify-center content-center gap-4">
      <h4 className="text-cyan-900 font-[800] mx-auto">
        1 month PRO access for Php 200
      </h4>
      <h3 className="rale text-zinc-500 text-center">
        and have the access to the following feature: <b>upload rooms, monitor
        views, view room ratings and chat with room seeker</b>
      </h3>

      <span className="mx-auto my-4">
        <GooglePay />
      </span>
    </div>
  );
};

export default Subcribe;
