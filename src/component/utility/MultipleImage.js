import React from "react";
import Filebase from "react-file-base64";

const MultipleImage = ({ handleImg, data }) => {
  return (
    <div className=" shad grid gap-2 w-full border-2 border-primary rounded-md bg-primary hover:border-orange transition-all duration-300 ease-liner">
      {data?.image && (
        <img alt="not found" className="rounded-md w-full shadow-md border-2 border-gray-200 h-[12rem] object-cover" src={data?.image[data?.image.length -1]} />
      )}
      <p className="text-gray-500 text-xs mr-auto w-[5rem] p-2">
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

export default MultipleImage;
