import client from "../img/client.svg";
import { MdEmail } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
const ClientInfo = ({ user }) => {
  return (
    <div className="grid grid-cols-2 gap-3 justify-items-between w-[21rem] border border-gray-200 rounded-lg shadow-md bg-white h-[26rem] md:h-[23rem] pt-10">
      <img
        src={client}
        alt=""
        loading="lazy"
        className="w-[80%] mt-2 mx-auto col-span-2  rounded-tr-md rounded-tl-md h-[10rem] drop-shadow-md "
      />
      {/* Business name */}
      <span className="col-span-2 text-center">
        <h1 className="text-cyan-900 capitalize font-bold text-[1.4rem] drop-shadow-sm p-1 -px-1 bg-gray-300 mx-auto w-auto">
          <HiUserCircle className=" text-[1.84rem] mr-2 inline" />
          {user.name}
        </h1>
      </span>

      <span className="text-left p-3">
        <h1 className="text-xs text-cyan-800 font-bold uppercase">
          <MdEmail className="text-[1rem] mr-1 inline" />
          contact
        </h1>
        <p className="ml-5  inline text-center text-xs text-gray-500 rale truncate">
          {user.email}
        </p>
      </span>

      <span className="text-left p-3">
        <h1 className="text-xs text-cyan-800 font-bold uppercase">
          <AiFillCheckCircle className="text-[1rem] mr-1 inline" />
          status
        </h1>
        <p className="ml-5 mr-auto font-[900] space-mono inline text-left text-xs ">
          {user.verified ? (
            <span className=" text-secondary">verified </span>
          ) : (
            <span className="text-rose-400"> unverified </span>
          )}
        </p>
      </span>
      {/* TODO: review */}
      {/* TODO:update feature  */}
    </div>
  );
};

export default ClientInfo;
