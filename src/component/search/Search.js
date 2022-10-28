import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import PropertyType from "./PropertyType";
import Filter from "./Filter";
import { AiFillSetting } from "react-icons/ai";
import { Label } from "./utilty";

const Search = () => {
  const [query, setquery] = useState({
    category:"",
    location: "",
    bed:1,
    minPrice:"",
    maxPrice:"",
    checkInDate:"",
    checkOutDate:"",
  });
  const handleChange = (e) => {
    setquery({ ...query, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    console.log(query) 
  }

  const iconCl = "mr-1 inline";
  return (
    <div className="grid grid-cols-1 border border-gray-200 bg-white shadow-md rounded-lg w-[21rem] mx-auto mt-10 md:mt-14 pb-5">
      <span className="h-4 bg-orange rounded-tl-md rounded-tr-md shadow-sm"></span>
      <span className="p-3">
        <Label text={"Category"} icon={<AiFillSetting className={iconCl} />} />
        <PropertyType />
      </span>
      <Filter
        handleChange={handleChange}
        setquery={setquery}
        onSubmit={onSubmit}
        query={query}
      />
    </div>
  );
};

export default Search;
