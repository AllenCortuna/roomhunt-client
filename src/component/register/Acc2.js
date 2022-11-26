// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { form, page1container } from "./style";
import Image from "../utility/Image";
import Option from "../utility/Option";
import BtnSubmit from "../btn/BtnSubmit";
import FormErr from "../utility/FormErr";
import {formHint} from "../utility/Text";
import {errNotify} from "../utility/notify";
import { ToastContainer } from "react-toastify";
import Input from "../utility/Input";


const Acc2 = ({ setPage, handleChange, data, handleImg, handleOpt }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();

  const onSubmit = () => {
    if (data.image ==="") {
      errNotify("Select Accommodation Image")
    } else {
    setPage(3);
      }
  };

  return (
    <span className={page1container}>
      <ToastContainer />
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
          type="tel"
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
          option={["resort", "hotel", "dorm"]}
          value={data.category}
        />

        {formHint("Business Image")}
        <Image handleImg={handleImg} data={data} />

        <BtnSubmit
          loading={null}
          loadingTxt={"Registering"}
          text={"next"}
        />
      </form>
    </span>
  );
};

export default Acc2;
