/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import Filter from "./Filter";
import { roomStore } from "../../state/room";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RoomByLocation from "../room/RoomByLocation";
import TermsAgree from "../utility/TermsAgree";

const Search = () => {
  const navigate = useNavigate();
  // const getRoomBySearch = roomStore((state) => state.getRoomBySearch);
  const getRoomByLocation = roomStore((state) => state.getRoomByLocation);

  const [query, setquery] = useState({
    category: "",
    location: "",
    bed: "",
    minPrice: "",
    maxPrice: "",
    checkInDate: "",
  });
  const controller = new AbortController();

  useEffect(() => {
    const search = JSON.parse(localStorage.getItem("search"));
    if (search) {
      setquery(search);
      getRoomByLocation(
        {
          location: search.location,
          category: search.category,
        },
        controller
      );
    }
  }, []);

  const handleChange = (e) => {
    setquery({ ...query, [e.target.name]: e.target.value });
  };
  const clear = () => {
    setquery({
      category: "",
      location: "",
      bed: "",
      minPrice: "",
      maxPrice: "",
      checkInDate: "",
    });
  };

  const onSubmit = () => {
    // getRoomBySearch(query, navigate, controller);
    localStorage.setItem("search", JSON.stringify(query));
    navigate("/rooms");
  };
  
  // clean up component unmount
  useEffect(() => {
    return () => controller.abort();
  }, []);

  return (
    <span className="grid gap-10">
      <ToastContainer />
      <div className="grid grid-cols-1 bg-white shadow-xl rounded-xl w-[21rem] mx-auto mt-10 mt-4 pb-5 md:p-4 md:w-[23rem]">
        <Filter
          handleChange={handleChange}
          setquery={setquery}
          onSubmit={onSubmit}
          query={query}
          clear={clear}
        />
      </div>
      <RoomByLocation />
   <TermsAgree/> 
    </span>
  );
};

export default Search;
