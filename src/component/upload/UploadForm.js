// import React from "react";
import { useForm } from "react-hook-form";
import InputVal from "../utility/InputVal";
import FormErr from "../utility/FormErr";
import DateInput from "../utility/Date";
import Image from "../utility/Image";
import BtnSubmit from "../btn/BtnSubmit";
import { BsFillGridFill } from "react-icons/bs";
import { roomStore } from "../../state/room";
import Option from "../utility/Option";

const UploadForm = ({ data, setdata ,onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const handleCheckIn = (e) => {
    setdata({ ...data, checkInDate: e.target.value });
  };

  const handleCheckOut = (e) => {
    setdata({ ...data, checkOutDate: e.target.value });
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
      className="flex flex-wrap flex-cols gap-3 w-full mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Image handleImg={handleImg} data={data} />
      <span className="grid gap-1">
        {text("Room No.")}
        <InputVal
          value={data.name}
          type={"text"}
          placeholder={"Name or No."}
          register={{ ...register("name", { required: true }) }}
          onChange={handleChange}
        />
      </span>
      <span className=" mt-2 grid grid-cols-2 gap-1 gap-x-3">
        {text("Price")}
        {text("Bed")}
        {acc === "hotel" || acc === "resort" ? (
          <InputVal
            value={data.price}
            type={"number"}
            placeholder={"per night"}
            register={{ ...register("price") }}
            onChange={handleChange}
          />
        ) : (
          <InputVal
            value={data.price}
            type={"number"}
            placeholder={"monthly"}
            register={{ ...register("price") }}
            onChange={handleChange}
          />
        )}
        <Option
          label={"Bed"}
          option={[1, 2, 3, 4, 5]}
          handleOpt={handleOpt}
          value={data.bed}
        />
      </span>
      <FormErr text={"Price is required"} err={errors.price} />

      {/* Available date */}
      <span className="mt-2 grid grid-cols-2 gap-1 gap-x-3">
        {text("Check in")}
        {text("Check out")}
        <DateInput handleChange={handleCheckIn} date={data.checkInDate} />
        <DateInput handleChange={handleCheckOut} date={data.checkOutDate} />
      </span>
      <BtnSubmit loading={loading} loadingTxt={"uploading"} text={"Upload"} />
    </form>
  );
};

export default UploadForm;
