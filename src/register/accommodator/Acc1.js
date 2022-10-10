import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { form, page1container, submit } from "../../style/register";

const Acc1 = ({ setPage, page, handleChange,data }) => {
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
          placeholder={"email"}
          {...register("email", { required: true })}
          onChange={handleChange}
        />
        {errors.email && <span className="form-error">email is required</span>}

        <input
          type="password"
          className="form-input"
          placeholder={"password"}
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
        <input type="submit" className={submit} />
      </form>
    </span>
  );
};

export default Acc1;
