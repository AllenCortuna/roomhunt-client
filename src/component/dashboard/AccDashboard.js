import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterState } from "../../state/register";
import decode from "jwt-decode";
import AccInfo from "./AccInfo";
import AccUtility from "./AccUtility";
import Verify from "./Verify";
import Subcribe from "../google-pay/Subcribe";
import { now } from "../utility/dateNow";

const AccDashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("acc")));
  const logOut = useRegisterState((state) => state.logOut);

  const subcribe = new Date(user?.result.subcribeTil) > now;

  useEffect(() => {
    const logout = () => {
      logOut();
      navigate.push("/acc/login");
      setUser(null);
    };
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage?.getItem("acc")));
  }, [logOut, navigate, user.token]);

  console.log(user.result.verified, subcribe);
  return (
    <div className="flex flex-col gap-8 md:gap-14 justify-center items-center my-10 mx-auto w-full h-auto">
      {!subcribe && user?.result.verified && <Subcribe />}
      {user?.result.verified && subcribe && <AccUtility />}

      {!user?.result.verified && <AccInfo user={user?.result} />}
      {!user?.result.verified && <Verify />}
    </div>
  );
};

export default AccDashboard;
