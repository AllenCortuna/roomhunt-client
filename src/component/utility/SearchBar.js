import React from 'react'
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <>
      {/* <hr className="w-screen" /> */}
    <div className="flex flex-wrap justify-center gap-1 h-min p-2 mx-auto max-w-[30rem] min-w-[20rem] rounded-full shadow-md border max-w-md bg-white ">
        <span>
          <input
            type="text"
            placeholder="search (eg.location,name)"
            className="w-60 h-9 text-xs font-normal p-2 text-gray-600 bg-none rounded-lg text-center  col-span-2 focus:outline-none focus:border-none focus:text-gray-500 "
          />
        </span>
        <span className="bg-gray-200 rounded-xl border-2 shadow-sm h-8 w-8 flex flex-wrap justify-center align-center">
          <BsSearch className="w-8 my-auto text-gray-500 center " />
        </span>
      </div>
    </>
  )
}

export default SearchBar
