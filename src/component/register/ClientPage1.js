import React from "react";
import Input from "../utility/Input";
import Date from "../utility/Date";
import { useForm } from "react-hook-form";

const ClientPage1 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <span className="flex flex-wrap flex-rows mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap gap-2 justify-center"
      >
        <Input
          name={"name"}
          type={"text"}
          placeholder={"name: eg John Doe"}
          {...register("name", { required: true })}
          // onChange={}
        />
        {errors.name && <span>name is required</span>}
        <Input
          name={"email"}
          type={"email"}
          placeholder={"email"}
          {...register("email", { required: true })}
          // onChange={}
        />
        {errors.email && <span>email is required</span>}

        <Input
          name={"contact"}
          type={"number"}
          placeholder={"contact number"}
          maxLenght={11}
          {...register("contact", { maxLength: 11, required: true })}
          // onChange={}
        />
        {errors.contact && <span>please enter a 11 digit number</span>}
        {/* birthday */}
        <span className="min-w-[18rem] max-w-[23rem] flex justify-start mx-auto align-center">
          <p className="text-xs text-gray-400 inline font-[500] ml-1 mr-3 mt-1">
            Birthday:
          </p>
          <Date />
        </span>
        <input type="submit" className="border-" />
      </form>
    </span>
  );
};

export default ClientPage1;
