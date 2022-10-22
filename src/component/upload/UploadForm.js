// import React from "react";
import { useForm } from "react-hook-form";
import Input from "../utility/Input";
import FormErr from "../utility/FormErr";
import DateInput from "../utility/Date";
import Option from "../utility/Option";
import { BsFillGridFill } from "react-icons/bs";

const UploadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};
  const handleChange = () => {};

  // price image data2 aircon bed

  return (
    <form
      className="flex flex-wrap flex-cols gap-3 w-full mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type={"text"}
        placeholder={"Name or description"}
        register={{ ...register("name", { required: true }) }}
        onChange={handleChange}
      />
      <span className="grid grid-cols-2 gap-2">
        <p className="mt-2 -mb-1 text-zinc-500 text-xs text-left w-full font-bold">
          <BsFillGridFill className="inline -mt-0.5 mr-1" />
          Price
        </p>

        <p className="mt-2 -mb-1 text-zinc-500 text-xs text-left w-full font-bold">
          <BsFillGridFill className="inline -mt-0.5 mr-1" />
          Beds
        </p>

        <Input
          type={"number"}
          placeholder={"Price per night"}
          register={{ ...register("price") }}
          onChange={handleChange}
        />
        <Option label={"Bed"} option={[1,2,3,4,5]}  />
      </span>
      <FormErr text={"Price is required"} err={errors.price} />

      {/* TODO: date validation */}
      {/* Available date */}
      <span className="grid grid-cols-2 gap-2">
        <p className="mt-2 -mb-1 text-zinc-500 text-xs text-left w-full font-bold">
          <BsFillGridFill className="inline -mt-0.5 mr-1" />
          Check In
        </p>

        <p className="mt-2 -mb-1 text-zinc-500 text-xs text-left w-full font-bold">
          <BsFillGridFill className="inline -mt-0.5 mr-1" />
          Check Out
        </p>
        <DateInput />
        <DateInput />
      </span>
    </form>
  );
};

export default UploadForm;
