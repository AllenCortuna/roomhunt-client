// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterState } from "../../state/register";
import { form, page1container, submit } from "../../style/register";

const Acc2 = ({ setPage, page, handleChange,data }) => {
  const registerAcc = useRegisterState(state=>state.registerAcc)


  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("submitdata", data)
    setPage(page + 1);
    registerAcc(data)
  };

  // console.log(watch("example"));
  return (
    <span className={page1container}>
      <form onSubmit={handleSubmit(onSubmit)} className={form}>

        <input
          type="text"
          className="form-input"
          placeholder={"owner"}
          {...register("owner", { required: true })}
          onChange={handleChange}
        />
        {errors.owner && (
          <span className="form-error"> business name is required</span>
        )}

        <input
          type="text"
          className="form-input"
          placeholder={"business name: Hotel California"}
          {...register("businessName", { required: true })}
          onChange={handleChange}
        />
        {errors.businessName && (
          <span className="form-error"> business name is required</span>
        )}
        <input
          type="text"
          className="form-input"
          placeholder={"location"}
          {...register("location", { required: true })}
          onChange={handleChange}
        />
        {errors.location && (
          <span className="form-error">location is required</span>
        )}

        <input
          type="number"
          className="form-input"
          placeholder={"contact: e.g. 09123456789"}
          maxLenght={11}
          {...register("contact", {
            minLength: 11,
            maxLength: 11,
            required: true,
          })}
          onChange={handleChange}
        />
        {errors.contact && (
          <span className="form-error">please enter a 11 digit number</span>
        )}

        <input
          type="text"
          className="form-input"

          placeholder={"Hotel Image"}
          {...register("image", { required: true })}
          onChange={handleChange}
        />
        {errors.image && (
          <span className="form-error">Hotel Image is required</span>
        )}

        <input
          type="text"
          className="form-input"
          placeholder={"category"}
          {...register("category", { required: true })}
          onChange={handleChange}
        />
        {errors.category && (
          <span className="form-error"> business name is required</span>
        )}


        <input type="submit" className={submit} />
      </form>
    </span>
  );
};

export default Acc2;
