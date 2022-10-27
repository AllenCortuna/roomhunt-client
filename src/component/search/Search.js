import React from "react";
// eslint-disable-next-line no-unused-vars
import PropertyType from "./PropertyType";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <div className="grid grid-cols-1 border border-gray-200 bg-white shadow-md rounded-lg w-[21rem] mx-auto mt-10 md:mt-14 pb-5">
      <PropertyType />
      <Filter />
      <SearchBar />
    </div>
  );
};

export default Search;
