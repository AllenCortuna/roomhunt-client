import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterState } from "../../state/register";
import { form, page1container, submit } from "../style";

const Acc1 = ({ setPage, page, handleChange,data }) => {

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
      setIsMatch(false)
    }else{
    setPage(page + 1);
    }
  };

  // console.log(watch("example"));
  return (
    <span className={page1container}>

      <form onSubmit={handleSubmit(onSubmit)} className={form}>
        <input
          type="email"
          className="form-input"
          placeholder={"Email"}
          {...register("email", { required: true })}
          onChange={handleChange}
        />
        {errors.email && <span className="form-error">email is required</span>}

        <input
          type="password"
          className="form-input"
          placeholder={"Password"}
          {...register("password", { required: true })}
          onChange={handleChange}
        />
        {errors.location && (
          <span className="form-error">password is required</span>
        )}
        <input
          type="password"
          className="form-input"
          placeholder={"Confirm Password"}
          {...register("confirmPassword", { required: true })}
          onChange={handleChange}
        />
        {errors.location && (
          <span className="form-error">password is required</span>
        )}
        {!isMatch && (
          <span className="form-error">password does not match</span>
        )}
        <input type="submit" className={submit(loading)} disabled={loading} />
      </form>
    </span>
  );
};

export default Acc1;
