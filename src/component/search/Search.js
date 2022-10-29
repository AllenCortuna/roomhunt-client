import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import PropertyType from "./PropertyType";
import Filter from "./Filter";
import { roomStore } from "../../state/room";
import { AiFillSetting } from "react-icons/ai";
import { Label } from "./utilty";
import { useNavigate } from "react-router-dom";

const Search = () => {
  
  const navigate = useNavigate()
  const getRoomBySearch = roomStore((state) => state.getRoomBySearch);
  const [query, setquery] = useState({
    category: "",
    location: "",
    bed: 1,
    minPrice: "",
    maxPrice: "",
    checkInDate: "",
    checkOutDate: "",
  });
  const handleChange = (e) => {
    setquery({ ...query, [e.target.name]: e.target.value });
  };

  const handleCat = (cat) => {
    setquery({ ...query, category: cat });
    console.log(query);
  };

  const onSubmit = () => {
    if (query.category === "") {
      alert("WARN: Choose a Category");
    } else if (query.checkInDate > query.checkOutDate) {
      alert("WARN: Check-In-Date must be equal or less than Check-Out-Date");
    } else if (query.location === "") {
      alert("WARN: Enter a Location");
    } else if (parseInt(query.minPrice) > parseInt(query.maxPrice)) {
      alert("WARN: Min-Price must be equal or less than Max-Price");
    } else {
      getRoomBySearch(query)
      navigate("/rooms");
    }
  };

  const iconCl = "mr-1 inline";
  return (
    <div className="grid grid-cols-1 border border-gray-200 bg-white shadow-md rounded-lg w-[21rem] mx-auto mt-10 md:mt-14 pb-5">
      <span className="h-4 bg-orange rounded-tl-md rounded-tr-md shadow-sm"></span>
      <span className="p-3">
        <Label text={"Category"} icon={<AiFillSetting className={iconCl} />} />
        <PropertyType handleCat={handleCat} query={query} />
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
