import React, { useState } from "react";
import FormErr from "../utility/FormErr";
import Input from "../utility/Input";
import { useForm } from "react-hook-form";
import { useRegisterState } from "../../state/acc";
import BtnSubmit from "../btn/BtnSubmit";
import acc from "../img/acc.svg";
import { Link } from "react-router-dom";

const LoginAcc = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const loginAcc = useRegisterState((state) => state.loginAcc);
  const loading = useRegisterState((state) => state.loading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    loginAcc(data);
    return;
  };
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid text-center p-4 bg-white w-[21rem] h-auto border rounded-md shadow-md h-auto mx-auto mt-10">
        <img src={acc} alt="accommodator" className="w-[50%] mx-auto" />
        <span className="text-center p-2">
          <h1 className="uppercase text-md text-cyan-800 font-bold drop-shadow-md">
           accommodator login
          </h1>
        <hr className="text-gray-400 w-full " />
        </span>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap justify-center mt-5"
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
        <FormErr text={"Password is required"} err={errors.password} />
        <BtnSubmit loading={loading} loadingTxt={"Processing"} text={"Login"} />
      </form>

    <Link to="/register/accommodator" className="text-gray-400 underline text-xs mt-5 ">Dont have an Account? Register </Link>  
    </div>
  );
};

export default LoginAcc;
