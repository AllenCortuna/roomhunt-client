import React, { useState } from "react";
import { IoIosBed } from "react-icons/io";
import { ImPriceTag } from "react-icons/im";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import InputVal from "../utility/InputVal";
import DateInput from "../utility/Date";
import Option from "../utility/Option";
import { Label } from "./utilty";
import { useForm } from "react-hook-form";
import PropertyType from "./PropertyType";
import { AiFillSetting } from "react-icons/ai";

const Filter = ({ handleChange, query, setquery, onSubmit, clear }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const iconCl = "mr-1 inline";

  const handleCat = (cat) => {
    setquery({ ...query, category: cat });
  };

  const handleOpt = (e) => {
    setquery({ ...query, bed: e.target.value });
  };

  const handleCheckIn = (e) => {
    setquery({ ...query, checkInDate: e.target.value });
  };

  const [show, setshow] = useState(false);

  return (
    <form
      className="grid grid-cols-2 gap-5 p-4 pt-8 md:pt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <button
        type="reset"
        className="border-2 border-gray-400 text-xs font-[500] rounded-lg p-3 text-gray-400"
        onClick={()=> setshow(!show)}
      >
    {show ? "hide" : "filter"}
      </button>
      <button
        type="submit"
        className="shad border-2 border-brown bg-brown text-xs font-[500] rounded-full duration-300 ease-linear transition-all group hover:bg-brown"
      >
        <p className="text-white text-sm font-semibold">Search</p>
      </button>
    {show && (
      <span className=" grid grid-cols-2 gap-5 pt-0 col-span-2">
        <span className="col-span-2 w-full">
          <Label
            text={"Category"}
            icon={<AiFillSetting className={iconCl} />}
          />
          <PropertyType handleCat={handleCat} query={query} />
        </span>

        <span className="col-span-2">
          <Label text={"Location"} icon={<MdLocationOn className={iconCl} />} />
          <InputVal
            type={"text"}
            onChange={handleChange}
            register={{ ...register("location", { required: false }) }}
            value={query.location}
            placeholder={"City or Province"}
          />
        </span>

        <span>
          <Label text={"min-Price"} icon={<ImPriceTag className={iconCl} />} />
          <InputVal
            type={"number"}
            onChange={handleChange}
            register={{ ...register("minPrice", { required: false }) }}
            value={query.minPrice}
            placeholder={"min price"}
          />
        </span>

        <span>
          <Label text={"max-Price"} icon={<ImPriceTag className={iconCl} />} />
          <InputVal
            type={"number"}
            onChange={handleChange}
            register={{ ...register("maxPrice", { required: false }) }}
            value={query.maxPrice}
            placeholder={"max price"}
          />
        </span>

        <span>
          <Label text={"Bed"} icon={<IoIosBed className={iconCl} />} />
          <br />
          <Option
            option={["", "1", "2", "3", "4", "5"]}
            value={query.bed}
            handleOpt={handleOpt}
          />
        </span>

        <span>
          <Label
            text={"Check-In"}
            icon={<BsCalendar2CheckFill className={iconCl} />}
          />
          <DateInput date={query.checkInDate} handleChange={handleCheckIn} />
        </span>

        <button
          type="reset"
          className="border-2 border-zinc-500 text-sm col-span-2 font-[500] rounded-full p-3 text-zinc-500"
          onClick={clear}
        >
          Clear Filter
        </button>
      </span>)}
    </form>
  );
};

export default Filter;
