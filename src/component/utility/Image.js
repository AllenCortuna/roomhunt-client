import React, { useState } from "react";

const Image = ({ handleImg ,data}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImage = (e) => {
    setSelectedImage(e.target.files[0]);
    handleImg(e.target.files[0]);
  };

  return (
    <div className="flex flex-wrap justify-center mx-auto border border-gray-300 w-[18rem] rounded-md bg-primary">
    {!data.image &&<p className="ml-2 mr-auto text-xs text-gray-500">Hotel Image</p>}
      <input title="Hotel Image" type="file" name="image" onChange={handleImage} className="ml-0 mr-auto text-gray-500 text-xs outline-gray-300" placeholder="Hotel Image" />
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"240px"}
            src={URL.createObjectURL(selectedImage)}
          />
          {/* <button onClick={() => setSelectedImage(null)}>Remove</button> */}
        </div>
      )}
    </div>
  );
};

export default Image;
