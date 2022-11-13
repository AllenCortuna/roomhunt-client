/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import FormErr from "../utility/FormErr";
import Input from "../utility/Input";
import { useForm } from "react-hook-form";
import { useRegisterState } from "../../state/register";
import BtnSubmit from "../btn/BtnSubmit";
import acc from "../img/acc.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { errNotify } from "../utility/notify";

const LoginAcc = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const loginAcc = useRegisterState((state) => state.loginAcc);
  const loading = useRegisterState((state) => state.loading);

  const err = useRegisterState((state) => state.err);
  const setErr = useRegisterState((state) => state.setErr);

  useEffect(() => {
    if (err !== null) {
      errNotify(err);
    }
    setErr(null);
  }, [err]);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    loginAcc(data, navigate);
    return;
  };
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid text-center bg-white w-[21rem] md:w-[24rem] h-auto border rounded-md shadow-md h-auto mx-auto mt-10 md:mt-24 pb-5 ">
      <ToastContainer />
      <span className="rounded-tl-md rounded-tr-md h-3 bg-orange mb-5 shadow-sm"></span>
      <img
        src={acc}
        alt="accommodator"
        className="w-[35%] mx-auto mb-4 drop-shadow-md"
      />
      <p className="uppercase font-bold text-cyan-800 text-lg drop-shadow-sm text-center">
        Login
      </p>
      <p className="font-semibold text-gray-400 text-xs text-center">
        Accommodator
      </p>
      <hr className=" my-2 w-auto text-gray-400 mx-4" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 md:p-6 md:gap-6 gap-3 grid place-items-center"
      >
        <Input
          type={"email"}
          placeholder={"Email"}
          register={{ ...register("email", { required: true }) }}
          onChange={handleChange}
        />
        <FormErr text={"Email is required"} err={errors.email} />

        <Input
          type={"password"}
          placeholder={"Password"}
          register={{ ...register("password", { required: true }) }}
          onChange={handleChange}
        />
        <FormErr text={"Passwords required"} err={errors.password} />
        <BtnSubmit loading={loading} loadingTxt={"Processing"} text={"Login"} />
      </form>

      <Link
        to="/register/acc"
        className="text-gray-400 underline text-xs mt-5 "
      >
        Dont have an Account? Register
      </Link>

      <Link to="/reset/acc" className="text-gray-400 underline text-xs mt-5 ">
        Forgot Password?
      </Link>
    </div>
  );
};

export default LoginAcc;
