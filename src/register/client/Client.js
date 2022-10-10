import React, { useState } from "react";
import profile from "../../component/img/profile.svg";
import ClientPage1 from "./Client1";
import ClientPage2 from "./Client2";
import { container, header, img, } from '../../style/register'
// import Button from "../../component/btn/Button";


const Client = () => {
  const [page, setPage] = useState(1);
  const handleClick = (num) => {
    setPage(num)
  }

  return (
      <div className={container}>
        <img src={profile} alt="login" className={img} />
        <h1 className={header}>Signup</h1>
        {page === 1 && <ClientPage1 />}
        {page === 2 && <ClientPage2 />}
      </div>

  );
};

export default Client;
