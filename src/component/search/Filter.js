import React from "react";
import { IoIosBed } from "react-icons/io";
import { ImPriceTag } from "react-icons/im";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import InputVal from "../utility/InputVal";
import DateInput from "../utility/Date";
import Option from "../utility/Option";
import { Label } from "./utilty";
import { useForm } from "react-hook-form";

const Filter = ({ handleChange, query, setquery, onSubmit, clear }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const iconCl = "mr-1 inline";

  const handleOpt = (e) => {
    setquery({ ...query, bed: e.target.value });
    console.log(query.bed)
  };

  const handleCheckIn = (e) => {
    setquery({ ...query, checkInDate: e.target.value });
  };

  const handleCheckOut = (e) => {
    setquery({ ...query, checkOutDate: e.target.value });
  };

  return (
    <form
      className="mt-3 grid grid-cols-2 gap-5 p-3 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <span>
        <Label text={"Location"} icon={<MdLocationOn className={iconCl} />} />
        <InputVal
          type={"text"}
          onChange={handleChange}
          register={{ ...register("location", { required: true }) }}
          value={query.location}
          placeholder={"City or Province"}
        />
      </span>

      <span>
        <Label text={"Bed"} icon={<IoIosBed className={iconCl} />} />
        <br />
        <Option
          option={[1, 2, 3, 4, 5]}
          value={query.bed}
          handleOpt={handleOpt}
        />
      </span>

      <span>
        <Label text={"min-Price"} icon={<ImPriceTag className={iconCl} />} />
        <InputVal
          type={"number"}
          onChange={handleChange}
          register={{ ...register("minPrice", { required: true }) }}
          value={query.minPrice}
          placeholder={"min price"}
        />
      </span>

      <span>
        <Label text={"max-Price"} icon={<ImPriceTag className={iconCl} />} />
        <InputVal
          type={"number"}
          onChange={handleChange}
          register={{ ...register("maxPrice", { required: true }) }}
          value={query.maxPrice}
          placeholder={"max price"}
        />
      </span>

      <span>
        <Label
          text={"Check-In"}
          icon={<BsCalendar2CheckFill className={iconCl} />}
        />
        <DateInput date={query.checkInDate} handleChange={handleCheckIn} />
      </span>

      <span>
        <Label
          text={"Check-Out"}
          icon={<BsCalendar2CheckFill className={iconCl} />}
        />
        <DateInput date={query.checkOutDate} handleChange={handleCheckOut} />
      </span>

      <button
        type="reset"
        className="border-2 border-gray-400 text-xs font-[500] rounded-md p-3 text-gray-400 mt-3"
        onClick={clear}
      >
        clear
      </button>
      <button
        type="submit"
        className="shad mt-3 border-2 border-brown bg-brown text-xs font-[500] rounded-full duration-300 ease-linear transition-all group hover:bg-brown">
        <p className="text-white text-sm font-semibold">Search</p>
      </button>
    </form>
  );
};

export default Filter;
