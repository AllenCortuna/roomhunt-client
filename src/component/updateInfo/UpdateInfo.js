import React,{ useEffect, useState } from "react";
import AccInfo from "../dashboard/AccInfo";
import UpdateForm from "./UpdateForm";
import autoAnimate from "@formkit/auto-animate";

const UpdateInfo = () => {
  const dom = React.useRef(null);
  React.useEffect(() => {
    dom.current && autoAnimate(dom.current);
  }, [dom]);

  const [open, setopen] = useState(false);
  const [data, setdata] = useState({
    businessName: "",
    ownerName: "",
    location: "",
    email: "",
    contact: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleImg = (img) => {
    setdata({ ...data, image: img });
  };
  const handleOpt = (e) => {
    setdata({ ...data, category: e.target.value });
    console.log("cat:", data.category);
  };
  const acc = JSON.parse(localStorage.getItem("acc"))
  useEffect(()=>{

  },[acc])

  return (
    <div className="flex flex-col w-full mx-auto justify-center  pt-10 p-3 gap-10" >
      <span className="flex flex-col mx-auto justify-center content-start w-full" ref={dom}>
        <button
          type="button"
          onClick={() => setopen(!open)}
          className="mx-auto p-4 text-sm shadow rounded-lg bg-white border rale text-zinc-500"
        >
          {open ? "close" : "edit profile"}
        </button>
        {open && <UpdateForm data={data} handleChange={handleChange} handleImg={handleImg} handleOpt={handleOpt} />}
      </span>
      <AccInfo />
    </div>
  );
};

export default UpdateInfo;
