// import React from "react";
import { useForm } from "react-hook-form";
import Input from "../utility/Input";
import FormErr from "../utility/FormErr";

const UploadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();

  const onSubmit = () => {};
  const handleChange = () => {};
  return (
    <form
      className=" con items-center flex flex-wrap gap-1.5 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type={"text"}
        placeholder={"name"}
        register={{ ...register("name", { required: true }) }}
        onChange={handleChange}
      />
      <Input
        type={"number"}
        placeholder={"price"}
        register={{ ...register("price", { required: true }) }}
        onChange={handleChange}
      />
      {/* <FormErr text={"Room price is required"} err={errors.price} /> */}

      <Input
        type={"number"}
        placeholder={"price"}
        register={{ ...register("", { required: true }) }}
        onChange={handleChange}
      />
      <FormErr text={"Room price is required"} err={errors.price} />
    </form>
  );
};

export default UploadForm;
