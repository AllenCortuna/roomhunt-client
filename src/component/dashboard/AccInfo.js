import { MdLocationOn } from "react-icons/md";
// import { FaUserCircle } from "react-icons/fa";
// import { AiFillPhone } from "react-icons/ai";
// import { GiHouse } from "react-icons/gi";

const AccInfo = ({ user }) => {
  return (
    <div className="grid grid-cols-2 justify-items-between w-[21rem] border border-gray-200 rounded-lg shadow-md bg-primary h-[26rem] md:h-[23rem] md:mr-0 md:ml-auto">
      <img
        src={user.image}
        alt=""
        loading="lazy"
        className="w-[19.5rem] shad mt-2 mx-auto col-span-2 rounded-md h-[12.5rem] object-cover border-2 border-white "
      />
      {/* Business name */}
      <span className="col-span-2 text-center">
        <h1 className="text-cyan-900 uppercase font-bold text-[1.5rem] mt-2 -mb-2">
          {user?.businessName}
        </h1>
        <MdLocationOn className="mr-1 inline text-sm text-gray-400" />
        <p className=" inline text-center text-xs text-gray-500 capitalize rale">
          {user.location}
        </p>
        <hr className="w-auto ml-2 mr-2 text-gray-400 shadow-md" />
      </span>

      <span className=" text-center mt-4 p-3">
        <h1 className="text-sm text-cyan-800 font-bold uppercase -mb-2">
          contact
        </h1>
        <p className=" inline text-center text-xs text-gray-500 rale">
          {user.email}
        </p>

        <p className="text-center text-xs text-gray-500 rale ">
          {user.contact}
        </p>
      </span>

      <span className="grid text-center mt-4 p-3">
        <h1 className="text-sm text-cyan-800 font-bold uppercase -mb-3">
          owner
        </h1>
        <p className="-mt-2 inline text-center text-xs text-gray-500 rale">
          {user.owner}
        </p>
        <p className="capitalize -mt-4 inline text-center text-xs text-gray-500 rale">
          {user.category}
        </p>
      </span>
      {/* TODO: review */}
      {/* TODO:update feature  */}
    </div>
  );
};

export default AccInfo;
