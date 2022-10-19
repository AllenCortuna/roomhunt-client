import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterState } from "../state/register";

const Logout = () => {
  const navigate = useNavigate();

  const logOut = useRegisterState((state) => state.logOut);
  useEffect(() => {
    logOut(navigate);
  }, [logOut, navigate]);
  return <div></div>;
};

export default Logout;
