import { useState } from "react";
import AccInfo from "../dashboard/AccInfo";
import UpdateForm from "./UpdateForm";

const UpdateInfo = () => {
  const [data, setdata] = useState({
    businessName: "",
    ownerName: "",
    location: "",
    email: "",
    contact: "",
    image: "",
  });
  const [open, setopen] = useState(false);

  return (
    <div className="flex flex-col w-full mx-auto justify-center  pt-10 p-3 gap-10">
      <span className="flex flex-col mx-auto justify-center content-start w-full">
        <button
          type="button"
          onClick={() => setopen(!open)}
          className="mx-auto p-4 text-sm shadow rounded-lg bg-white border rale text-zinc-500"
        >
          {open ? "close" : "edit profile"}
        </button>
        {open && <UpdateForm data={data} />}
      </span>
      <AccInfo />
    </div>
  );
};

export default UpdateInfo;
