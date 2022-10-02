import React from 'react'
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-1 h-min p-2 mx-auto w-80 rounded-full shadow-sm border max-w-md bg-white ">
        <span>
          <input
            type="text"
            placeholder="search"
            className="w-60 h-9 text-xs font-normal p-2 text-gray-500 bg-none rounded-lg rounded-br-none rounded-tr-none text-center border col-span-2 focus:font-semibold focus:border-gray-400 focus:outline-none focus:border-none focus:text-gray-400 "
          />
        </span>
        <span className="bg-gray-200 rounded-xl rounded-tl-none rounded-bl-none border-2 shadow-sm h-9  text-center w-8">
<BsSearch
            className="text-center w-6 my-auto text-gray-500 center mt-2"

          />
        </span>
      </div>
      {/* <hr className="w-screen" /> */}
    </>
  )
}

export default SearchBar
