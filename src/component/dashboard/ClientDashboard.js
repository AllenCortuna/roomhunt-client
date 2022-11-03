import React, { useEffect, useState } from "react";
import decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useRegisterState } from "../../state/register";
import ClientInfo from './ClientInfo'
import Verify from "./Verify";

const ClientDashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("client")));
  const logOut = useRegisterState((state) => state.logOut);

  useEffect(() => {
    const logout = () => {
      logOut();
      navigate.push("/client/login");
      setUser(null);
    };
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage?.getItem("client")));
  }, [logOut, navigate, user.token]);

  return (
    <div className="w-full p-2 md:p-8 flex flex-wrap pt-14 justify-center gap-10 pb-14 md:mt-40">
      {/* client info */}
    <ClientInfo user={user?.result} />
    {user?.result.verified===false && <Verify/>}
      {/* TODO: totorial feat */}
    </div>
  );
};

export default ClientDashboard;
