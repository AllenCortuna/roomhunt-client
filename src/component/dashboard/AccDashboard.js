import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterState } from "../../state/register";
import decode from "jwt-decode";
import AccInfo from "./AccInfo";
import RoomList from "./RoomList";

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
    <div className="grid justify-items-center pt-10 grid-cols-1 md:grid-cols-2 bg-gray-200 h-screen" >
      {/* accommodator info */}
    <AccInfo user={user?.result} />
    <RoomList id={user._id}/>
    </div>
  );
};

export default AccDashboard;
