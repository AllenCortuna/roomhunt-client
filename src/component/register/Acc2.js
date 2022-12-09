// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { form, page1container } from "./style";
import Image from "../utility/Image";
import Option from "../utility/Option";
import BtnSubmit from "../btn/BtnSubmit";
import {formHint} from "../utility/Text";
import {errNotify} from "../utility/notify";
import { ToastContainer } from "react-toastify";
import Input from "../utility/Input";


const Acc2 = ({ setPage, handleChange, data, handleImg, handleOpt }) => {

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    if (data.image ==="") {
      errNotify("Select Accommodation Image")
    }else if (data.category ==="") {
      errNotify("Select Property Type")
    }else if (data.businessName ==="") {
      errNotify("Enter a Business Name")
    }else if (data.owner ==="") {
      errNotify("Enter Owner Name")
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
          register={{ ...register("owner", { required: false }) }}
          onChange={handleChange}
        />

        <Input
          type="text"
          placeholder={"Business Name"}
          register={{ ...register("businessName", { required: false }) }}
          onChange={handleChange}
        />

        <Input
          type="tel"
          placeholder={"Contact"}
          register={{
            ...register("contact", {
              minLength: 11,
              maxLength: 11,
              required: false,
            }),
          }}
          onChange={handleChange}
        />

        {formHint("Property type")}

        <Option
          label={"Category"}
          handleOpt={handleOpt}
          option={["", "resort", "hotel", "dorm"]}
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
