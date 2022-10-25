/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import UploadForm from "./UploadForm";
import { BsFillGridFill } from "react-icons/bs";
import { useState } from "react";
import { roomStore } from "../../state/room";
import RoomList from "./RoomList";

const Upload = () => {
  const [id, setid] = useState(0);
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
  const updateRoom = roomStore((state) => state.updateRoom);
  const rooms = roomStore((state) => state.rooms);
  const [room, setroom] = useState(null);

  const clear = () => {
    setid(0);
    setroom(null);
    setdata(initialValue);
  };

  useEffect(() => {
    setroom(id ? rooms.find((r) => r._id === id) : null);
  }, [id]);

  useEffect(() => {
    if (room) setdata(room);
  }, [id, room]);

  const onSubmit = async () => {
    if (id === 0) {
      if (data.image === "") {
        alert("WARN: Select a Room image");
      } else if (data.checkInDate > data.checkOutDate) {
        alert("INVALID DATE: Check-Out-Date must be less than Check-Out-Date");
      }
      else {
        uploadRoom(data);
        clear();
      }
    } else {
      updateRoom(data, id);
      clear();
    }
    clear();
  };
  return (
    <div className="flex flex-wrap justify-center items-start gap-y-14 gap-0 mt-5 mb-14">
      <span className="mx-auto flex flex-wrap  w-[21rem] rounded-md shadow-md bg-white border h-auto p-4 ">
        <h1 className="uppercase text-sm font-bold drop-shadow-sm text-cyan-800 mb-2 ml-1">
          <BsFillGridFill className="inline mr-1 -mt-1" />
          Upload
        </h1>
        <hr className="w-full text-gray-400 drop-shadow-sm" />
        <UploadForm data={data} setdata={setdata} onSubmit={onSubmit} />
      </span>
      <RoomList setid={setid} />
    </div>
  );
};

export default Upload;
