import React from "react";
import { useLocation } from "react-router-dom";
import ResetAcc from "./ResetAcc";
import ResetClient from "./ResetClient";
import Notfound from "../NotFound";
import ResetClientOTP from "./ResetClientOTP";
import ResetAccOTP from "./ResetAccOTP";

const Reset = () => {
  const path = useLocation();
  const pathname = path.pathname;
  const reset = (pathname) => {
    switch (pathname) {
      case "/reset/acc":
        return <ResetAcc />;
      case "/reset/client":
        return <ResetClient/>
      case "/reset/client-otp":
        return <ResetClientOTP/>
      case "/reset/acc-otp":
        return <ResetAccOTP/>
      default:
        return <Notfound />;
    }
  };

  return <div>{reset(pathname)}</div>;
};

// <ResetClient/>

export default Reset;
