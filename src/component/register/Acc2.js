// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterState } from "../../state/register";
import { form, page1container } from "./style";
import { BsInfoCircleFill } from "react-icons/bs";
import Image from "../utility/Image";
import Option from "../utility/Option";
import BtnSubmit from "../btn/BtnSubmit";
import FormErr from "../utility/FormErr";
import Input from "../utility/Input";

const Acc2 = ({ setPage, handleChange, data, handleImg, handleOpt }) => {
  const registerAcc = useRegisterState((state) => state.registerAcc);
  const loading = useRegisterState((state) => state.loading);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();

  const onSubmit = () => {
    registerAcc(data, setPage);
  };
  const formHint = (text) => {
    return (
      <>
        <p className=" mt-5 -mb-1 text-gray-600 text-[.65rem] text-left w-full capitalize font-semibold">
          <BsInfoCircleFill className="inline -mt-0.5 mr-1" />
          {text}
        </p>
      </>
    );
  };

  return (
    <span className={page1container}>
      <form onSubmit={handleSubmit(onSubmit)} className={form}>
        {formHint("Business Info")}
        <Input
          type={"text"}
          placeholder={"Owner Full Name"}
          register={{ ...register("owner", { required: true }) }}
          onChange={handleChange}
        />
        <FormErr text={"Owner name is required"} err={errors.owner} />

        <Input
          type="text"
          placeholder={"Business Name"}
          register={{ ...register("businessName", { required: true }) }}
          onChange={handleChange}
        />
        <FormErr
          text={" Business name is required"}
          err={errors.businessName}
        />

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
        <FormErr text={"Enter a 11 digit number"} err={errors.contact} />

        {formHint("Property type")}

        <Option
          label={"Category"}
          handleOpt={handleOpt}
          option={["resort", "hotel", "boarding-house"]}
          value={data.category}
        />

        {formHint("Address")}
        <Input
          type="text"
          placeholder={"Street"}
          register={{ ...register("street", { required: true }) }}
          onChange={handleChange}
        />
        <FormErr text={"Street is required"} err={errors.street} />

        <Input
          type="text"
          placeholder={"Brgy"}
          register={{ ...register("brgy", { required: true }) }}
          onChange={handleChange}
        />
        <FormErr text={"Brgy is required"} err={errors.brgy} />

        <Input
          type="text"
          placeholder={"City/Town"}
          register={{ ...register("city", { required: true }) }}
          onChange={handleChange}
        />
        <FormErr text={"City is required"} err={errors.city} />

        <Input
          type="text"
          placeholder={"Province"}
          register={{ ...register("province", { required: true }) }}
          onChange={handleChange}
        />
        <FormErr text={"Province is required"} err={errors.province} />

        {formHint("Business Image")}
        <Image handleImg={handleImg} data={data} />

        <BtnSubmit
          loading={loading}
          loadingTxt={"Registering"}
          text={"Register"}
        />
      </form>
    </span>
  );
};

export default Acc2;
