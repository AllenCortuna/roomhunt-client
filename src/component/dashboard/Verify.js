/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { TiWarning } from "react-icons/ti";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

const Verify = () => {
  return (
    <div className="flex flex-wrap content-start flex-rows border border-gray-200 rounded-lg shadow-md bg-white h-[26rem] md:h-[23rem] w-[21rem]">
      <span className="text-left p-1 bg-gray-300 w-full rounded-tr-md rounded-tl-md w-full mb-0">
        <h1 className="text-cyan-900 capitalize font-bold text-[1.2rem] ">
          <TiWarning className="mr-2 inline" />
          Verify Account
        </h1>
      </span>

      <span className="border p-4 text-xs text-zinc-400 w-[14rem] m-3 rounded-lg">
        <TiWarning className="mr-2 inline" />
        Some feature are not available for unverfied room seekers (Sending of
        feedback and chatting with accommodators).
      </span>

      <h1 className="text-cyan-800 text-xs font-semibold ml-4 mt-3 drop-shadow-sm">
        <BsFillQuestionCircleFill className="mr-1 inline" />
        How to Verify Account ?
      </h1>

      <span className="border p-4 text-xs text-zinc-400 w-[18rem] m-3 rounded-lg">
        Send the following files and info <br />
        Full Name <br />
        Address <br />
        Valid I.D. <br />
        to:
        <MdAttachEmail className="ml-2 mr-1 inline" />
        <a href="mailto:olsencortuna@gmail.com?subject=VerifyAccountClient" className="underline font-[500]">
          olsencortuna@gmail.com
        </a>
      </span>
    </div>
  );
};

export default Verify;
