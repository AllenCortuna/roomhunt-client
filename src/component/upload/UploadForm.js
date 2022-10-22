// import React from "react";
import { useForm } from "react-hook-form";
import Input from "../utility/Input";
import FormErr from "../utility/FormErr";
import DateInput from "../utility/Date";
import Image from "../utility/Image";
import Option from "../utility/Option";
import BtnSubmit from "../btn/BtnSubmit";
import { BsFillGridFill } from "react-icons/bs";
import { roomStore } from "../../state/room";

const UploadForm = ({ data, setdata }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uploadRoom = roomStore((state) => state.uploadRoom);
  const loading = roomStore((state) => state.loading);

  const onSubmit = () => {
    // alert(data.creator);
    uploadRoom(data);
  };
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleImg = (img) => {
    setdata({ ...data, image: img });
  };

  const acc = JSON.parse(localStorage?.getItem("acc"))?.result?.category;
  console.log(acc.category);

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
        <Input
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
          <Input
            type={"number"}
            placeholder={"per night"}
            register={{ ...register("price") }}
            onChange={handleChange}
          />
        ) : (
          <Input
            type={"number"}
            placeholder={"monthly"}
            register={{ ...register("price") }}
            onChange={handleChange}
          />
        )}
        <Option label={"Bed"} option={[1, 2, 3, 4, 5]} />
      </span>
      <FormErr text={"Price is required"} err={errors.price} />

      {/* TODO: date validation */}
      {/* Available date */}
      <span className="mt-2 grid grid-cols-2 gap-1 gap-x-3">
        {text("Check in")}
        {text("Check out")}
        <DateInput />
        <DateInput />
      </span>
      <BtnSubmit loading={loading} loadingTxt={"uploading"} text={"Upload"} />
    </form>
  );
};

export default UploadForm;
