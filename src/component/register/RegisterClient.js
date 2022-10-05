import React, { useState } from "react";
import profile from "../img/profile.svg";
import ClientPage1 from "./ClientPage1";
import ClientPage2 from "./ClientPage2";


const RegisterClient = () => {
  const [page, setPage] = useState(1);


  const btnClass = "transition-all duration-300 p-4 py-2 space-mono rounded-md  ";

  return (
    <div className="flex-wrap flex justify-center pt-10 max-w-[30rem] min-w-[20rem] px-auto mx-auto gap-4">
      <div className="text-center p-4 bg-white h-auto w-[21rem] rounded-md shadow h-[28rem]">
        <img src={profile} alt="login" className="w-20 m-auto my-2 " />
        <h1 className=" font-semibold text-gray-500 text-md ">Register</h1>
        {page === 1 && <ClientPage1 />}
        {page === 2 && <ClientPage2 />}
      </div>
      {/* <p>{page}/3</p> */}

    </div>
  );
};

export default RegisterClient;
