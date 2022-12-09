import React from "react";
import { useForm } from "react-hook-form";
import { form, page1container } from "./style";
import Input from "../utility/Input";
import BtnSubmit from "../btn/BtnSubmit";
import { formHint } from "../utility/Text";
import { errNotify } from "../utility/notify";

const Acc1 = ({ setPage, page, handleChange, data }) => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    if (data.password !== data.confirmPassword) {
      errNotify("Password does not Match!");
    } else if (data.email === "") {
      errNotify("Email is required")
    } else if (data.password === "") {
      errNotify("Password is Required!")
    }
    else{
    setPage(page + 1);
    }
  };

  // console.log(watch("example"));
  return (
    <span className={page1container}>
      <hr className="my-4" />
      <form onSubmit={handleSubmit(onSubmit)} className={form}>
        {formHint("Email")}

        <Input
          type="email"
          placeholder={"Email"}
          register={{ ...register("email", { required: false }) }}
          onChange={handleChange}
        />

        <Input
          type="password"
          placeholder={"Password"}
          register={{
            ...register("password", {
              required: false,
              minLength: 8,
            }),
          }}
          onChange={handleChange}
        />

        <Input
          type="password"
          placeholder={"Confirm Password"}
          register={{ ...register("confirmPassword", { required: false }) }}
          onChange={handleChange}
        />

        <BtnSubmit loading={false} loadingTxt={""} text={"next"} />
      </form>
    </span>
  );
};

export default Acc1;
