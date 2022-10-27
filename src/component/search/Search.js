import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import PropertyType from "./PropertyType";
import Filter from "./Filter";
import { BsFillGridFill } from "react-icons/bs";
import { Label } from './utilty'

const Search = () => {
  const [query, setquery] = useState({

  })
  const handleChange = (e) => {
    setquery({ ...query, [e.target.name]: e.target.value })}

    const iconCl = "mr-1 inline";
    return (
      <div className="grid grid-cols-1 border border-gray-200 bg-white shadow-md rounded-lg w-[21rem] mx-auto mt-10 md:mt-14 pb-5 p-2">
        <Label text={"PropertyType"} icon={<BsFillGridFill className={iconCl} />} />
        <PropertyType />
        <Filter handleChange={handleChange}
          query={query} />
      </div>
    );
  };

  export default Search;
