// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { form, page1container, submit } from "../../style/register";

const Acc1 = ({data,setData,setPage,page}) => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    setPage(page+1)
  };

  // console.log(watch("example"));
  return (
    <span className={page1container}>

      <form onSubmit={handleSubmit(onSubmit)} className={form}>
        <input
          type="text"
          className="form-input"
          placeholder={"owner name: eg Mario B. Luigue"}
          onChange={()=>handleChange()}
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
          // onChange={}
        />
        {errors.businessName && (
          <span className="form-error"> business name is required</span>
        )}
        <input
          type="text"
          className="form-input"
          placeholder={"location"}
          {...register("location", { required: true })}
          // onChange={}
        />
        {errors.location && (
          <span className="form-error">location is required</span>
        )}

        <input
          type="email"
          className="form-input"
          placeholder={"email"}
          {...register("email", { required: true })}
          // onChange={}
        />
        {errors.email && <span className="form-error">email is required</span>}

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
          // onChange={}
        />
        {errors.contact && (
          <span className="form-error">please enter a 11 digit number</span>
        )}
        <input type="submit" className={submit} />
      </form>
    </span>
  );
};

export default Acc1;
