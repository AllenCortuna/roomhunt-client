/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { TiWarning } from "react-icons/ti";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Verify = () => {
  const location = useLocation();

  const client = (
    <>
      <span className="border text-xs text-zinc-600 w-[16rem] ml-4 m-3 rounded-lg p-3 rale ">
        <TiWarning className="mr-2 inline" />
        Some feature are not available for unverfied room seekers (Sending of
        review and chatting with accommodators).
      </span>
      <h1 className="text-cyan-800 text-xs font-semibold ml-4 mt-2 drop-shadow-sm">
        <BsFillQuestionCircleFill className="mr-1 inline" />
        How to Verify Account ?
      </h1>
      <span className="border p-4 text-xs text-zinc-600 w-[18rem] ml-4 m-3 rounded-lg rale">
        <b>
          Send the following files and info <br />
        </b>
        Full Name <br />
        Address <br />
        <a
          href="https://www.gsis.gov.ph/ginhawa-for-all/list-of-acceptable-valid-ids/"
          className="underline"
        >
          Valid I.D.
        </a>
        <br />
        to:
        <MdAttachEmail className="ml-2 mr-1 inline" />
        <a
          href="mailto:2022roomhunt@gmail.com?subject=Verify Account Client"
          className="underline font-[500]"
        >
          2022roomhunt@gmail.com
        </a>
      </span>
    </>
  );

  const acc = (
    <>
      <span className="border text-xs text-zinc-600 w-[16rem] ml-4 m-3 rounded-lg p-3 rale ">
        <TiWarning className="mr-2 inline" />
        Some feature are not available for unverified Accommodators (Uploading
        of rooms).
      </span>
      <h1 className="text-cyan-800 text-xs font-semibold ml-4 mt-2 drop-shadow-sm">
        <BsFillQuestionCircleFill className="mr-1 inline" />
        How to Verify Account ?
      </h1>
      <span className="border p-4 text-xs text-zinc-600 w-[18rem] ml-4 m-3 rounded-lg rale">
        <b>
          Send the following files and info <br />
        </b>
        Full Name <br />
        Address <br />
        <a
          href="https://www.gsis.gov.ph/ginhawa-for-all/list-of-acceptable-valid-ids/"
          className="underline"
        >
          Valid I.D.
        </a>
        <br />
        Business Permit. <br />
        to:
        <MdAttachEmail className="ml-2 mr-1 inline" />
        <a
          href="mailto:2022roomhunt@gmail.com?subject=Verify Account Accommodator"
          className="underline font-[500]"
        >
          2022roomhunt@gmail.com
        </a>
      </span>
    </>
  );
  const btn =
    "p-3 text-white rounded-md w-24 bg-zinc-700 text-center border-gray-200 shadow-md text-sm font-semibold border-2 mx-auto";

  return (
    <div className="flex flex-wrap content-start flex-col rounded-2xl shadow-lg bg-white h-[26rem] w-[21rem] content-start justify-start">
      <span className="text-left  bg-zinc-700 w-full rounded-tl-xl rounded-tr-xl w-full mb-2 p-2 ">
        <h1 className="text-white capitalize font-bold text-[1.2rem] ">
          <TiWarning className="mr-2 inline" />
          Verify Account
        </h1>
      </span>

      {location.pathname === "/client/dashboard" ?  client : acc }
      <br />
      {location.pathname === "/client/dashboard" ? (
        <a
          href="mailto:2022roomhunt@gmail.com?subject=Verify Account Client"
          className={btn}
        >
          Verify
        </a>
      ) : (
        <a
          href="mailto:2022roomhunt@gmail.com?subject=Verify Account Accommodator"
          className={btn}
        >
          Verify
        </a>
      )}
    </div>
  );
};

export default Verify;
