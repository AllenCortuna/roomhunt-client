/* eslint-disable jsx-a11y/anchor-is-valid */
import { MdLocationOn } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AccInfo = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col content-around w-[20rem] border border-gray-200 rounded-xl shadow-md bg-white h-[19rem] mx-auto gap-4"
        onClick={() => navigate(`/accinfo/${user._id}`)}>
      <img
        src={user.image}
        alt=""
        loading="lazy"
        className="w-full rounded-tr-xl rounded-tl-xl h-[10rem] object-cover"
      />
      {/* Business name */}
      <span className="text-left px-2">
        <h1 className="text-cyan-900 capitalize font-bold text-[1rem]">
          {user?.businessName}
        </h1>
        <MdLocationOn className="mr-1 inline text-sm text-gray-400" />
        <p className=" inline text-center text-xs text-gray-500 capitalize rale">
          {user.location}
        </p>
        <hr className="w-auto mx-1 text-gray-400 shadow-md" />
      </span>

      <span className="px-4 flex flex-row justify-between">
        <h1 className="text-xs text-cyan-800 font-bold uppercase">
          <AiFillCheckCircle className="text-[1rem] mr-1 inline" />
          verified
        </h1>
      </span>
    </div>
  );
};

export default AccInfo;
