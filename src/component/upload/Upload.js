/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import UploadForm from "./UploadForm";
import { useState } from "react";
import { roomStore } from "../../state/room";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { errNotify, okNotify } from "../utility/notify";
import RoomList from "./RoomList";
import Back from "../btn/Back";

const Upload = () => {
  const [id, setid] = useState(0);
  // set location
  const [initialValue, setinitialValue] = useState({
    name: "",
    price: "",
    category: "",
    unavailableUntil: "",
    description: "",
    location: "",
    bed: 1,
    image: [],
  });
  const [data, setdata] = useState({
    name: "",
    price: "",
    category: "",
    unavailableUntil: "",
    description: "",
    location: "",
    bed: 1,
    image: [],
  });

  useEffect(() => {
    const curLocation = JSON.parse(localStorage.getItem("acc"))?.result
      ?.location;
    const curCat = JSON.parse(localStorage.getItem("acc"))?.result?.category;
    setinitialValue({
      ...initialValue,
      category: curCat,
      location: curLocation,
    });
    setdata({ ...data, category: curCat, location: curLocation });
  }, []);

  const uploadRoom = roomStore((state) => state.uploadRoom);
  const updateRoom = roomStore((state) => state.updateRoom);
  const rooms = roomStore((state) => state.rooms);
  const err = roomStore((state) => state.err);
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
    if (err !== null) {
      errNotify(err);
    }
  }, [err]);

  useEffect(() => {
    if (room) setdata(room);
  }, [id, room]);

  const onSubmit = async () => {
    if (id === 0) {
      if (data.image.length < 1) {
        errNotify("Select a Room Image");
      } else if (data.location === "") {
        errNotify("Invalid Location");
      } else if (data.category === "") {
        errNotify("Choose a Room Type");
      } else if (data.price === "") {
        errNotify("Invalid Price");
      } else {
        await uploadRoom(data,okNotify,errNotify);
        clear();
      }
    } else {
      await updateRoom(data, id,okNotify,errNotify);
      clear();
    }
  };
  return (
    <>
      <div className="flex flex-wrap flex-row justify-center content-start gap-10 mt-[5%] mb-14">
        <span className="mx-auto flex flex-wrap  w-[21rem] rounded-xl shadow-md bg-white border h-auto p-4 ">
          <UploadForm data={data} setdata={setdata} onSubmit={onSubmit} />
        </span>
        {/* list of ownrooms  */}
        <RoomList setid={setid} />
        {/* back button  */}
        <span className="w-full">
          <Back />
        </span>
      </div>
      <ToastContainer />
    </>
  );
};

export default Upload;
