import React from "react";
import Filebase from "react-file-base64";

const MultipleImage = ({ handleImg, data, setdata }) => {
  const deleteImg = () => {
    setdata({ ...data, image: [] });
  };

  return (
    <div className=" shad flex flex-col gap-2 w-full border-2 border-primary rounded-md bg-primary transition-all duration-300 ease-liner">
      {data?.image.map((a) => (
        <img
          alt="not found"
          src={a}
          className="rounded-sm w-full shad border-gray-200 h-[5rem] object-cover"
        />
      ))}
      <span className="flex flex-row justify-between m-0">
        <p className="text-primary mr-auto w-[8rem] p-2 truncate ">
          <Filebase
            type="file"
            multiple={false}
            onDone={({ base64 }) => handleImg(base64)}
            id="upload-img"
          />
        </p>

        <button
          className="text-sm font-semibold p-2 py-1 rounded-md w-20 border bg-rose-600 text-white shadow-sm truncate"
          onClick={deleteImg}
        >
          clear
        </button>
      </span>
    </div>
  );
};

export default MultipleImage;
