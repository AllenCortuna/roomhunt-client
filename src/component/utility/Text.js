import { BsInfoCircleFill } from "react-icons/bs";

export const formHint = (text) => {
    return (
      <>
        <p className=" mt-5 -mb-1 text-gray-500 text-[.65rem] text-left w-full capitalize font-semibold">
          <BsInfoCircleFill className="inline -mt-0.5 mr-1" />
          {text}
        </p>
      </>
    );
  };
