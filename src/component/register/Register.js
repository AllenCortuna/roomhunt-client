import React from "react";
import { Link } from "react-router-dom";
import acc from '../img/acc.svg'
import client from '../img/client.svg'

const Register = () => {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-4 place-items-center max-w-[40rem]">
      <Link to="/register/accommodator">
        <span className="h-[15rem] w-[15rem] grid grid-cols-1 bg-white rounded-lg p-4 shadow-md text-center ">

    <img src={acc} alt="accommodator" className="w-[74%] mx-auto"/>
    </span>
      </Link>


      <Link to="/register/client">
        <span className="h-[15rem] w-[15rem] grid grid-cols-1 bg-white rounded-lg p-4 shadow-md text-center ">
    <img src={client} alt="accommodator"/>
    </span>
      </Link>
    </div>
  );
};

export default Register;
