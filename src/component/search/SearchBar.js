import React from 'react'
import { roomStore } from "../../state/room";

const SearchBar = () => {
  const loading = roomStore((state) => state.loading);
  return (
    <>
      {/* <hr className="w-screen" /> */}
    <div className="flex flex-wrap justify-apart h-10 mx-auto px-2 gap-4">
        <span>
          <input
            type="text"
            placeholder="location"
            className=" h-full text-xs font-normal p-2 text-gray-600 rounded-lg  border-2  bg-none text-center  col-span-2 focus:outline-none focus:text-gray-500 capitalize w-[14rem]"
          />
        </span>
    <button type="button"
className={`flex flex-wrap justify-center group hover:bg-brown  hover:shadow-sm rounded-lg border-2 border-white shadow-md p-3 bg-green`}
    >
        <p className="text-sm text-white drop-shadow-md font-semibold">

    {loading? "searching..." : "search"}
    </p>

    </button>
      </div>
    </>
  )
}

export default SearchBar
