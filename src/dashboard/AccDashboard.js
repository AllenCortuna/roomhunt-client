import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterState } from "../state/register";
import decode from "jwt-decode";
import AccInfo from "./component/AccInfo";

const AccDashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage?.getItem("profile"))
  );
  const logOut = useRegisterState((state) => state.logOut);
  const data = useRegisterState((state) => state.data);
  console.log("dashboard data:", data);

  useEffect(() => {
    const logout = () => {
      logOut();
      navigate.push("/accommodator/login");
      setUser(null);
    };
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage?.getItem("profile")));
  }, [logOut, navigate, user.token]);

  return (
    <div className="pt-10" >
      {/* accommodator info */}
    <AccInfo data={user?.result} />
    </div>
  );
};

export default AccDashboard;