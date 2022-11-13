/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import PropertyType from "./PropertyType";
import Filter from "./Filter";
import { roomStore } from "../../state/room";
import { AiFillSetting } from "react-icons/ai";
import { Label } from "./utilty";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { warnNotify } from "../utility/notify";
import RoomByLocation from "../room/RoomByLocation";

const Search = () => {
  const navigate = useNavigate();
  const getRoomBySearch = roomStore((state) => state.getRoomBySearch);
  const getRoomByLocation = roomStore((state) => state.getRoomByLocation);

  const [query, setquery] = useState({
    category: "",
    location: "",
    bed: 1,
    minPrice: "",
    maxPrice: "",
    checkInDate: "",
    checkOutDate: "",
  });
  useEffect(() => {
    const search = JSON.parse(localStorage.getItem("search"));
    if (search) {
      setquery(search);
      getRoomByLocation({
        location: search.location,
        category: search.category,
      });
    }
  }, []);
  const handleChange = (e) => {
    setquery({ ...query, [e.target.name]: e.target.value });
  };
  const clear = () => {
    setquery({
      category: "",
      location: "",
      bed: 1,
      minPrice: "",
      maxPrice: "",
      checkInDate: "",
      checkOutDate: "",
    });
  };

  const handleCat = (cat) => {
    setquery({ ...query, category: cat });
  };

  const onSubmit = () => {
    if (query.category === "") {
      warnNotify(" Choose a Category");
    } else if (query.checkInDate > query.checkOutDate) {
      warnNotify(" Check-In-Date must be equal or less than Check-Out-Date");
    } else if (query.location === "") {
      warnNotify(" Enter a Location");
    } else if (query.maxPrice === "" || query.minPrice === "") {
      warnNotify(" Enter a Min-Price or Max-Price");
    } else if (parseInt(query.minPrice) > parseInt(query.maxPrice)) {
      warnNotify(" Min-Price must be equal or less than Max-Price");
    } else {
      getRoomBySearch(query);
      localStorage.setItem("search", JSON.stringify(query));
      navigate("/rooms");
    }
  };

  const iconCl = "mr-1 inline";
  return (
    <span className="grid md:grid gap-14">
      <ToastContainer />
      <div className="grid grid-cols-1 border border-gray-200 bg-white shadow-lg rounded-lg w-[21rem] mx-auto mt-10 mt-4 pb-5 lg:mt-24 md:p-4 md:w-[23rem]">
        {/* <span className="h-4 bg-cyan-600 rounded-tl-md rounded-tr-md shadow-sm"></span> */}
        <span className="p-3">
          <Label
            text={"Category"}
            icon={<AiFillSetting className={iconCl} />}
          />
          <PropertyType handleCat={handleCat} query={query} />
        </span>
        <Filter
          handleChange={handleChange}
          setquery={setquery}
          onSubmit={onSubmit}
          query={query}
          clear={clear}
        />
      </div>
      <RoomByLocation />
    </span>
  );
};

export default Search;
