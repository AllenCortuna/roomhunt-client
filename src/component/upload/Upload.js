import React from "react";
import UploadForm from "./UploadForm";
import { BsFillGridFill } from "react-icons/bs";
import { useState } from "react";

const Upload = () => {
  const initialValue = {
    name: "Name",
    price: "",
    checkInDate: "",
    checkOutDate: "",
    bed: "",
    image: "",
  };
  const [data, setdata] = useState({
    name: "Name",
    price: "",
    checkInDate: "",
    checkOutDate: "",
    bed: 1,
    image: "",
  });
  return (
    <div className="grid md:grid-cols-2 mx-auto max-w-[48rem] gap-4 place-items-center mt-5">
      <span className="flex flex-wrap  w-[21rem] rounded-md shadow-md bg-white border h-auto p-4 ">
        <h1 className="uppercase text-sm font-bold drop-shadow-sm text-cyan-800 mb-2 ml-1">
          <BsFillGridFill className="inline mr-1 -mt-1" />
          Upload
        </h1>
        <hr className="w-full text-gray-400 drop-shadow-sm" />
        <UploadForm data={data} setdata={setdata} initialValue={initialValue} />
      </span>
    </div>
  );
};

export default Upload;
