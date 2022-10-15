import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterState } from "../../state/register";
import { form, formErr, page1container, submit } from "./style";
import Input from "../utility/Input";

const Acc1 = ({ setPage, page, handleChange, data }) => {
  const loading = useRegisterState((state) => state.loading);
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
      <form onSubmit={handleSubmit(onSubmit)} className={form}>
        <Input
          type="email"
          placeholder={"Email"}
          register={{ ...register("email", { required: true }) }}
          onChange={handleChange}
        />
          <span className={formErr(errors.email)}>Email is required</span>

        <Input
          type="password"
          placeholder={"Password"}
          register={{ ...register("password", { required: true }) }}
          onChange={handleChange}
        />
          <span className={formErr(errors.password)}>password is required</span>

        <Input
          type="password"
          placeholder={"Confirm Password"}
          register={{ ...register("confirmPassword", { required: true }) }}
          onChange={handleChange}
        />
          <span className={formErr(errors.confirmPassword)}>password is required</span>
          <span className={formErr(!isMatch)}>password does not match</span>
        <input type="submit" className={submit(loading)} disabled={loading} />
      </form>
    </span>
  );
};

export default Acc1;
