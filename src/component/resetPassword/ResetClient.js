import React, { useEffect, useState } from "react";
import BtnSubmit from "../btn/BtnSubmit";
import Input from "../utility/Input";
import { formHint } from "../utility/Text";
import { useForm } from "react-hook-form";
import { resetStore } from "../../state/reset";
import { useNavigate } from "react-router-dom";
import { errNotify } from "../utility/notify";
import { ToastContainer } from "react-toastify";

const ResetClient = () => {
  const span = "grid gap-3";
  const resetClientPW = resetStore((state) => state.resetClientPW);
  const loading = resetStore((state) => state.loading);
  const err = resetStore((state) => state.err);
  const setErr = resetStore((state) => state.setErr);

  useEffect(() => {
    if (err !== null) {
      errNotify(err);
    }
  }, [err]);
  
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [data, setdata] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    if (data.password !== data.confirmPassword) {
      errNotify("Passsword does not match");
    } else if (!data.email || !data.password || !data.confirmPassword) {
      errNotify("Complete all Info");
    } else {
      resetClientPW(data, navigate);
      setErr(null)
    }
  };
  return (
    <form className="grid gap-1 " onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <h4 className="text-cyan-800 text-xs font-bold mx-auto">
        Reset Accommodator Password
      </h4>
      <hr className="text-zinc-400 " />

      <span className={span}>
        {formHint("Email")}
        <Input
          type={"email"}
          register={{ ...register("email", { required: true }) }}
          onChange={handleChange}
        />
      </span>

      <span className={span}>
        {formHint("New Password")}
        <Input
          type={"password"}
          register={{ ...register("password", { required: true }) }}
          onChange={handleChange}
        />
      </span>

      <span className={span}>
        {formHint("confirm Password")}
        <Input
          type={"password"}
          register={{ ...register("confirmPassword", { required: true }) }}
          onChange={handleChange}
        />
      </span>
      <BtnSubmit loading={loading} />
    </form>
  );
};

export default ResetClient
