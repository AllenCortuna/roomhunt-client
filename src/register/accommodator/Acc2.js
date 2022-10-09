// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { form, page1container, submit } from "../../style/register";

const Acc2 = ({ setPage, page, handleChange }) => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setPage(page + 1);
  };

  // console.log(watch("example"));
  return (
    <span className={page1container}>
      <form onSubmit={handleSubmit(onSubmit)} className={form}>

        <input
          type="text"
          className="form-input"
          placeholder={"owner name: eg Mario B. Luigue"}
          onChange={handleChange}
          {...register("owner", { required: true })}
        />
        {errors.owner && (
          <span className="form-error">Owner name is required</span>
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
        {errors.location && (
          <span className="form-error">Hotel Image is required</span>
        )}

        <input type="submit" className={submit} />
      </form>
    </span>
  );
};

export default Acc2;
