import React from "react";
import UploadForm from "./UploadForm";

const Upload = () => {

  return (
    <div className="grid md:grid-cols-2 mx-auto max-w-[48rem] gap-4 place-items-center mt-5">
      <span className="flex flex-wrap  w-[21rem] rounded-md shadow-md bg-white border h-auto p-4 ">
        <h1 className="uppercase text-sm font-bold drop-shadow-sm text-cyan-800 mb-2 ml-1">Upload</h1>
    <UploadForm/>
      </span>
    </div>
  );
};

export default Upload;
