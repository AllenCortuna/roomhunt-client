import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import Filebase from 'react-file-base64'

const Image = ({ handleImg,data }) => {

  return (

    <div className="flex flex-wrap justify-center mx-auto border border-gray-300 w-[18rem] rounded-md p-2">
      <label htmlFor="upload-img" className="text-gray-400 text-xs ml-0 mr-auto">
        <BsFillImageFill className="text-[1rem] text-gray-500 inline mr-2" />
        Hotel Image
      </label>

       <Filebase type="file" multiple={false} onDone={({ base64 }) => handleImg(base64)} />
    {data.image &&
        <div>
          <img
            alt="not fount"
            width={"240px"}
            src={data.image}
          />
        </div>
    }
    </div>
  );
};

export default Image;
