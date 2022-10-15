import React from "react";
// import { BsFillImageFill } from "react-icons/bs";
import Filebase from "react-file-base64";

const Image = ({ handleImg, data }) => {
  return (
    <div className="shad grid gap-2 w-[18rem] border-2 border-primary rounded-md p-1 bg-primary hover:border-orange transition-all duration-300 ease-liner">
      {data.image && (
        <img alt="not fount" className="rounded-xl w-full shadow-md border border-gray-200" src={data.image} />
      )}
      <p className="text-gray-500 text-xs mr-auto w-[5rem]">
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
