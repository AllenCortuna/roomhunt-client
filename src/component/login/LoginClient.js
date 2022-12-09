/* eslint-disable react-hooks/exhaustive-deps */
import { ToastContainer } from "react-toastify";
import { errNotify } from "../utility/notify";
import React, { useState } from "react";
import Input from "../utility/Input";
import { useForm } from "react-hook-form";
import { useRegisterState } from "../../state/register";
import BtnSubmit from "../btn/BtnSubmit";
import client from "../img/client.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginAcc = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const loginClient = useRegisterState((state) => state.loginClient);
  const loading = useRegisterState((state) => state.loading);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = () => {
    if (!data.email) {
      errNotify("Enter email!");
    } else if (!data.password) {
      errNotify("Enter Pasaword!");
    } else {
    loginClient(data, navigate);
    }
  };
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid text-center bg-white w-[21rem] md:w-[23rem] h-auto border-t-[1rem] border-orange rounded-md shadow-md h-auto mx-auto mt-10 py-5">
      <ToastContainer />
      <img
        src={client}
        alt="accommodator"
        className="w-[35%] mx-auto mb-4 drop-shadow-md"
      />
      <p className="uppercase font-bold text-cyan-800 text-lg drop-shadow-sm text-center">
        Login
      </p>
      <p className="font-semibold text-zinc-500 text-xs text-center rale">
        Client
      </p>
      <hr className=" my-2 w-auto text-gray-400 mx-4" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 gap-3 grid place-items-center"
      >
        <Input
          type={"email"}
          placeholder={"Email"}
          register={{ ...register("email", { required: false }) }}
          onChange={handleChange}
        />

        <Input
          type={"password"}
          placeholder={"Password"}
          register={{ ...register("password", { required: false }) }}
          onChange={handleChange}
        />
        <BtnSubmit loading={loading} loadingTxt={"Processing"} text={"Login"} />
      </form>

      <Link
        to="/register/client"
        className="text-gray-400 underline text-xs mt-5 "
      >
        Dont have an Account? Register{" "}
      </Link>

      <Link
        to="/reset/client"
        className="text-gray-400 underline text-xs mt-5 "
      >
        Forgot Password?
      </Link>
    </div>
  );
};

export default LoginAcc;
