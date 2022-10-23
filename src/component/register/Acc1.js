import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { form, page1container } from "./style";
import Input from "../utility/Input";
import BtnSubmit from "../btn/BtnSubmit";
import FormErr from "../utility/FormErr";
import { BsFillGridFill } from "react-icons/bs";
import { formHint } from "../utility/Text";

const Acc1 = ({ setPage, page, handleChange, data }) => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const [isMatch, setIsMatch] = useState(true);

  const onSubmit = () => {
    if (data.password !== data.confirmPassword) {
      setIsMatch(false);
    } else {
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
          register={{ ...register("email", { required: true }) }}
          onChange={handleChange}
        />
        <FormErr text={"Email is required"} err={errors.email} />

        <Input
          type="password"
          placeholder={"Password"}
          register={{ ...register("password", { required: true }) }}
          onChange={handleChange}
        />
        <FormErr text={"Password is required"} err={errors.password} />

        <Input
          type="password"
          placeholder={"Confirm Password"}
          register={{ ...register("confirmPassword", { required: true }) }}
          onChange={handleChange}
        />
        <FormErr text={"Password is required"} err={errors.confirmPassword} />
        <FormErr text={"Password does not match"} err={!isMatch} />

        <BtnSubmit loading={false} loadingTxt={""} text={"Submit"} />
      </form>
    </span>
  );
};

export default Acc1;
