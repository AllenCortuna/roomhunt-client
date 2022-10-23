import React from "react";
import UploadForm from "./UploadForm";
import { BsFillGridFill } from "react-icons/bs";
import { useState } from "react";
import { roomStore } from "../../state/room";
import RoomList from "./RoomList";

const Upload = () => {
  const initialValue = {
    name: "",
    price: "",
    checkInDate: "",
    checkOutDate: "",
    bed: 1,
    image: "",
  };
  const [data, setdata] = useState({
    name: "",
    price: "",
    checkInDate: "",
    checkOutDate: "",
    bed: 1,
    image: "",
  });

  const uploadRoom = roomStore((state) => state.uploadRoom);
  const onSubmit = () => {
    alert(Date(data.checkInDate) < Date(data.checkOutDate));
    if (data.image === "") {
      alert("Room images  is required");
    } else if (Date(data.checkInDate) > Date(data.checkOutDate)) {
      alert("Invalid date selection");
    } else if (data.bed === "") {
      alert("Select no. of bed");
    } else {
      uploadRoom(data);
      setdata(initialValue);
    }
  };
  return (
    <div className="flex flex-wrap justify-center items-start mx-auto gap-14 mt-5">


      <span className=" mx-auto flex flex-wrap  w-[21rem] rounded-md shadow-md bg-white border h-auto p-4 ">
        <h1 className="uppercase text-sm font-bold drop-shadow-sm text-cyan-800 mb-2 ml-1">
          <BsFillGridFill className="inline mr-1 -mt-1" />
          Upload
        </h1>
        <hr className="w-full text-gray-400 drop-shadow-sm" />
        <UploadForm
          data={data}
          setdata={setdata}
          initialValue={initialValue}
          onSubmit={onSubmit}
        />
      </span>
        <RoomList />
    </div>
  );
};

export default Upload;
