import React, { useState } from "react";
import { BsFillImageFill } from "react-icons/bs";

const Image2 = ({ handleImg, data }) => {
  const handleChange = (e) => {
    let encodedString = Buffer.from(e.target.files[0]).toString('base64');
    handleImg(encodedString)
    
  }
  return (
    <div className="flex flex-wrap justify-center mx-auto border border-gray-300 w-[18rem] rounded-md p-2">
      <label
        htmlFor="upload-img"
        className="text-gray-400 text-xs ml-0 mr-auto"
      >
        <BsFillImageFill className="text-[1rem] text-gray-500 inline mr-2" />
        Hotel Image
      </label>
      <input type="file" id="upload-img" value="" className="hidden"  onChange={handleChange}/>

      {data.image && (
        <div>
          <img alt="not fount" width={"240px"} src={data.image} />
        </div>
      )}
    </div>
  );
};

export default Image2;
