import React from "react";

const AccInfo = ({ data }) => {
  return (
    <div>
      <span className="">
        <img src={data.image} alt="" className="" />
        <h1 className="">{data?.businessName}</h1>
      </span>
    <h4 className="">{data.owner}</h4>
    <p>hahaha</p>
    </div>
  );
};

export default AccInfo;
