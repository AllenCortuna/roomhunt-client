// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterState } from "../../state/register";
import { form, page1container, submit, formInput } from "../style";
import Image from "../../component/utility/Image";

const Acc2 = ({ setPage, handleChange, data }) => {
  const registerAcc = useRegisterState((state) => state.registerAcc);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    registerAcc(data, setPage);
  };

  // console.log(watch("example"));
  return (
    <span className={page1container}>
      <form onSubmit={handleSubmit(onSubmit)} className={form}>
        <input
          type="text"
          className={formInput}
          placeholder={"owner"}
          {...register("owner", { required: true })}
          onChange={handleChange}
        />
        {errors.owner && (
          <span className="form-error"> business name is required</span>
        )}

        <input
          type="text"
          className={formInput}
          placeholder={"business name: Hotel California"}
          {...register("businessName", { required: true })}
          onChange={handleChange}
        />
        {errors.businessName && (
          <span className="form-error"> business name is required</span>
        )}
        <input
          type="text"
          className={formInput}
          placeholder={"location"}
          {...register("location", { required: true })}
          onChange={handleChange}
        />
        {errors.location && (
          <span className="form-error">location is required</span>
        )}

        <input
          type="number"
          className={formInput}
          placeholder={"contact: e.g. 09123456789"}
          maxLength="11"
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
          className={formInput}
          placeholder={"category eg:hotel, resort bh"}
          {...register("category", { required: true })}
          onChange={handleChange}
        />
        {errors.category && (
          <span className="form-error">category is required</span>
        )}

        <Image handleImg={handleChange} data={data} />

        <input type="submit" className={submit} />
      </form>
    </span>
  );
};

export default Acc2;
