// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterState } from "../../state/register";
import { form, page1container, submit, formInput } from "../style";
import Image from "../../component/utility/Image";
import Option from "../../component/utility/Option";

const Acc2 = ({ setPage, handleChange, data, handleImg ,handleOpt}) => {
  const registerAcc = useRegisterState((state) => state.registerAcc);
  const error = useRegisterState((state) => state.error);
  const loading = useRegisterState((state) => state.loading);

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
      {error && (
        <p className="text-sm text-error mb-4">
          There is an error while registering your account please try again
        </p>
      )}
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
        <Option
          handleOpt={handleOpt}
          option={["resort", "hotel", "rental-home"]}
        />

        <Image handleImg={handleImg} data={data} />

        <input type="submit" className={submit(loading)} disabled={loading} />
      </form>
    </span>
  );
};

export default Acc2;
