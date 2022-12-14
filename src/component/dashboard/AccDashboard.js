import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterState } from "../../state/register";
import decode from "jwt-decode";
import AccInfo from "./AccInfo";
import AccUtility from "./AccUtility";
import Verify from "./Verify";

const AccDashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("acc")));
  const logOut = useRegisterState((state) => state.logOut);

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

  return (
    <div className=" flex flex-col gap-14 justify-center items-center mt-10 mx-auto w-full h-auto">
      {user?.result.verified === true ? <AccUtility /> : <Verify />}
      {user?.result.verified === false ? <AccInfo user={user?.result} /> : <span></span>}
    </div>
  );
};

export default AccDashboard;
