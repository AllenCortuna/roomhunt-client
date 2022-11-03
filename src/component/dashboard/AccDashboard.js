import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterState } from "../../state/register";
import decode from "jwt-decode";
import AccInfo from "./AccInfo";
// import RoomList from "./RoomList";
import AccUtility from "./AccUtility";
import Verify from "./Verify";

const AccDashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage?.getItem("acc"))
  );
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
    <div className="grid gap-14 md:gap-5 place-items-start justify-items-center pt-10 bg-zinc-200 grid-cols-1 md:grid-cols-2 pb-14 md:pt-40 md:pb-80" >
      {/* accommodator info */}
    <AccInfo user={user?.result} />
    {user?.result.verified===true ?  <AccUtility/> : <Verify/>  }
    
    {/* <RoomList id={user._id}/> */}
    </div>
  );
};

export default AccDashboard;
