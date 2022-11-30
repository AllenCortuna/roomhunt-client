import React, { useEffect } from "react";
import UploadForm from "./UploadForm";
import { BsFillGridFill } from "react-icons/bs";
import { useState } from "react";
import { roomStore } from "../../state/room";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { roomUploadNotify, roomUpdateNotify , errNotify} from "../utility/notify";
import RoomList from "./RoomList";



const Upload = () => {
  const [id, setid] = useState(0);
  const initialValue = {
    name: "",
    price: "",
    category: "",
    unavailableUntil: "",
    description: "",
    location:"",
    bed: 1,
    image: "",
  };
  const [data, setdata] = useState({
    name: "",
    price: "",
    category: "",
    unavailableUntil: "",
    description: "",
    location:"",
    bed: 1,
    image: "",
  });

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  
  useEffect(() => {
    if (err!==null) {
      errNotify(err)
    }
  }, [err])

  useEffect(() => {
    if (room) setdata(room);
  }, [id, room]);
  const onSubmit = async () => {
    if (id === 0) {
      if (data.image === "") {
        errNotify("Select a Room Image")
      } else if (data.location ==="") {
        errNotify("Invalid Location");
      } else if (data.category ==="") {
        errNotify("Choose a Room Type");
      } else if (data.price ==="") {
        errNotify("Invalid Price");
      } else {
        await uploadRoom(data);
        clear();
      }
    } else {
      await updateRoom(data, id);
      clear();
    }
  };
  return (
    <>
      <div className="flex flex-wrap flex-row justify-center content-start gap-y-14 gap-0 mt-[5%] mb-14">
        <span className="mx-auto flex flex-wrap  w-[21rem] rounded-xl shadow-md bg-white border h-auto p-4 ">
          <h1 className="uppercase text-sm font-bold drop-shadow-sm text-cyan-800 mb-2 ml-1">
            <BsFillGridFill className="inline mr-1 -mt-1" />
            Upload
          </h1>
          <hr className="w-full text-gray-400 drop-shadow-sm" />
          <UploadForm data={data} setdata={setdata} onSubmit={onSubmit} />
        </span>
        <RoomList setid={setid} />
      </div>
      <ToastContainer />
    </>
  );
};

export default Upload;
