import React from "react";
// import { BsFillImageFill } from "react-icons/bs";
import Filebase from "react-file-base64";

const Image = ({ handleImg, data }) => {
  return (
    <div className="grid gap-2 w-[18rem] border border-gray-300 rounded-md p-1">
      {data.image && (
        <img alt="not fount" className="rounded-xl w-full shadow-md border border-gray-200" src={data.image} />
      )}
      <p className="text-gray-400 text-xs mr-auto w-[5rem]">
        <Filebase
          type="file"
          multiple={false}
          onDone={({ base64 }) => handleImg(base64)}
          id="upload-img"
        />
      </p>
    </div>
  );
};

export default Image;
