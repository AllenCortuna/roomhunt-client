import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
// import { AiFillPhone } from "react-icons/ai";
// import { GiHouse } from "react-icons/gi";

const AccInfo = ({ user }) => {
  return (
    <div className="grid gap-1 grid-cols-2 justify-items-between w-[21rem] border border-gray-200 rounded-lg shadow-md bg-smoke h-[26rem] md:h-[23rem] md:mr-0 md:ml-auto">
      <img
        src={user.image}
        alt=""
        loading="lazy"
        className="w-[19.8rem] mt-2 mx-auto col-span-2  rounded-tr-md rounded-tl-md h-[12.5rem] object-cover border-white border-2 shadow-md "
      />
      {/* Business name */}
      <span className="col-span-2 text-center">
        <h1 className="text-cyan-900 capitalize font-bold text-[1.5rem] mt-2 -mb-2">
          {user?.businessName}
        </h1>
        <MdLocationOn className="mr-1 inline text-sm text-gray-400" />
        <p className=" inline text-center text-xs text-gray-500 capitalize rale">
          {user.location}
        </p>
        <hr className="w-auto ml-2 mr-2 text-gray-400 shadow-md" />
      </span>

      <span className="p-2">
        <h1 className="text-xs text-cyan-800 font-bold uppercase ">
          <MdEmail className="text-[1rem] mr-1 inline" />
          contact
        </h1>
        <p className="inline text-xs text-gray-500 rale">{user.email}</p>

        <p className="text-xs text-gray-500 rale ">{user.contact}</p>
      </span>

      <span className="p-2">
        <h1 className="text-xs text-cyan-800 font-bold uppercase ">
          <AiFillCheckCircle className="text-[1rem] mr-1 inline" />
          Owner
        </h1>
        <p className="inline text-xs text-gray-500 rale">{user.owner}</p>

        <p className="drop-shadow-sm text-xs space-mono font-[900]">
          {user.verified ? (
            <span className="text-lime-500">verifed</span>
          ) : (
            <span className="text-rose-500">unverifed</span>
          )}
        </p>
      </span>

      {/* TODO: review */}
      {/* TODO:update feature  */}
    </div>
  );
};

export default AccInfo;
