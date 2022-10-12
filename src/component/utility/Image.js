import React, { useState } from "react";

const Image = ({ handleImg, data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImage = (e) => {
    setSelectedImage(e.target.files[0]);
    handleImg(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <div className="flex flex-wrap justify-center mx-auto border border-gray-300 w-[18rem] rounded-md bg-primary">
      <label for="upload-img" className="text-gray-500 text-xs ml-0 mr-auto"> upload images</label>
      <input id="upload-img"
        title="Hotel Image"
        type="file"
        name="image"
        onChange={handleImage}
        placeholder="Hotel Image"
        className="hidden"
      />
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
