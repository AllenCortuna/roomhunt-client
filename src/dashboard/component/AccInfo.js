import React from "react";

const AccInfo = ({ user }) => {
  return (
    <div>
      <span className="">
        <img src={user.image} alt="" className="" />
        <h1 className="">{user?.businessName}</h1>
      </span>
      <h4 className="">{user.owner}</h4>
      <p>hahaha</p>
    </div>
  );
};

export default AccInfo;
