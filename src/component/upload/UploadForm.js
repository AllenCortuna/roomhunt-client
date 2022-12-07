// import React from "react";
import { useForm } from "react-hook-form";
import InputVal from "../utility/InputVal";
import DateInput from "../utility/Date";
import Image from "../utility/Image";
import BtnSubmit from "../btn/BtnSubmit";
import { BsFillGridFill } from "react-icons/bs";
import { roomStore } from "../../state/room";
import Option from "../utility/Option";

const UploadForm = ({ data, setdata, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const loading = roomStore((state) => state.loading);

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleImg = (img) => {
    setdata({ ...data, image: img });
  };

  const handleOpt = (e) => {
    setdata({ ...data, bed: e.target.value });
  };

  const handleCategory = (e) => {
    setdata({ ...data, category: e.target.value });
  };

  const handleAvailable = (e) => {
    setdata({ ...data, unavailableUntil: e.target.value });
  };

  const acc = JSON.parse(localStorage?.getItem("acc"))?.result?.category;

  // label
  const text = (txt) => {
    return (
      <>
        <p className="text-zinc-500 text-xs text-left w-full font-semibold">
          <BsFillGridFill className="inline -mt-0.5 mr-1" />
          {txt}
        </p>
      </>
    );
  };

  return (
    <form
      className="flex flex-wrap flex-col gap-3 w-full mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Image handleImg={handleImg} data={data} />
      <span className=" mt-2 grid grid-cols-2 gap-1 gap-x-3">
        {text("Name")}
        <span></span>
        <InputVal
          value={data.name}
          type={"text"}
          placeholder={"Room Name/No."}
          register={{ ...register("name") }}
          onChange={handleChange}
        />
      </span>
      <span className=" mt-2 grid grid-cols-2 gap-1 gap-x-3">
        {text("Price")}
        {text("Bed")}
        <InputVal
          value={data.price}
          type={"number"}
          placeholder={
            acc === "hotel" || acc === "resort" ? "per night" : "per month"
          }
          register={{ ...register("price") }}
          onChange={handleChange}
        />
        <Option
          label={"Bed"}
          option={["1", "2", "3", "4", "5"]}
          handleOpt={handleOpt}
          value={data.bed}
        />
      </span>

      {/* Available date */}
      <span className="mt-2 grid grid-cols-2 gap-1 gap-x-3">
        {text("Room Type")}
        {text("Available Until")}
        <Option
          label={"Type"}
          option={["", "dorm", "resort", "hotel"]}
          handleOpt={handleCategory}
          value={data.category}
        />
        <DateInput
          handleChange={handleAvailable}
          date={data.unavailableUntil}
        />
      </span>

      {/* location  */}
      <span className="grid gap-1">
        {text("Room Location")}
        <InputVal
          value={data.location}
          type={"text"}
          placeholder={"Street Brgy. City, Province"}
          register={{ ...register("location", { required: true }) }}
          onChange={handleChange}
        />
      </span>

      {/* Description  */}
      <span className="grid gap-1">
        {text("Description")}
        <InputVal
          value={data.description}
          type={"text"}
          placeholder={"Room Description"}
          register={{ ...register("description", { required: true }) }}
          onChange={handleChange}
        />
      </span>
      <BtnSubmit loading={loading} loadingTxt={"loading"} text={"Upload"} />
    </form>
  );
};

export default UploadForm;
