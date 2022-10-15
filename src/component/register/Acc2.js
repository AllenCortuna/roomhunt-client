// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterState } from "../../state/register";
import { form, formErr, page1container, submit } from "./style";
import Image from "../utility/Image";
import Option from "../utility/Option";
import Input from "../utility/Input";
import Error from "../utility/Error";

const Acc2 = ({ setPage, handleChange, data, handleImg, handleOpt }) => {
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
      <form onSubmit={handleSubmit(onSubmit)} className={form}>
        <Input
          type={"text"}
          placeholder={"Owner Full Name"}
          register={{ ...register("owner", { required: true }) }}
          onChange={handleChange}
        />
          <span className={formErr(errors.owner)}>Owner name is required</span>

        <Input
          type="text"
          placeholder={"Business Name"}
          register={{ ...register("businessName", { required: true }) }}
          onChange={handleChange}
        />
          <span className={formErr(errors.businessName)}> Business name is required</span>

        <Input
          type="number"
          placeholder={"Contact"}
          register={{
            ...register("contact", {
              minLength: 11,
              maxLength: 11,
              required: true,
            }),
          }}
          onChange={handleChange}
        />
          <span className={formErr(errors.contact)}>Enter a valid 11 digit number</span>

          <p className="ml-2 mt-2 text-gray-500 text-xs text-left w-full">Address</p>
          <hr className="w-[18rem] " />
        <Input
          type="text"
          placeholder={"Street"}
          register={{ ...register("street", { required: true }) }}
          onChange={handleChange}
        />
          <span className={formErr(errors.street)}>Location is required</span>

        <Input
          type="text"
          placeholder={"Brgy"}
          register={{ ...register("brgy", { required: true }) }}
          onChange={handleChange}
        />
          <span className={formErr(errors.brgy)}>Location is required</span>

        <Input
          type="text"
          placeholder={"City/Town"}
          register={{ ...register("city", { required: true }) }}
          onChange={handleChange}
        />
          <span className={formErr(errors.city)}>Location is required</span>

        <Input
          type="text"
          placeholder={"Province"}
          register={{ ...register("province", { required: true }) }}
          onChange={handleChange}
        />
          <span className={formErr(errors.province)}>Location is required</span>

        <Option
          label={"Category"}
          handleOpt={handleOpt}
          option={["resort", "hotel", "rental-home"]}
        />

        <Image handleImg={handleImg} data={data} />

      {error && (
              <Error text={"There is an error while registering your account. Plaese complete all the info and try again"}/>
      )}

      {loading && (
        <p className="text-sm text-gray-400">
        Registering ... 
        </p>
      )}

        <input type="submit" className={submit(loading)} disabled={loading} />
      </form>
    </span>
  );
};

export default Acc2;
