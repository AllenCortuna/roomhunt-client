import React, { useState } from "react";
import profile from "../img/profile.svg";
import ClientPage1 from "./ClientPage1";
import ClientPage2 from "./ClientPage2";
import { container, header, img, } from '../style/registerClient'


const RegisterClient = () => {
  const [page, setPage] = useState(1);



  return (
      <div className={container}>
        <img src={profile} alt="login" className={img} />
        <h1 className={header}>Register</h1>
        {page === 1 && <ClientPage1 />}
        {page === 2 && <ClientPage2 />}
      </div>

  );
};

export default RegisterClient;
