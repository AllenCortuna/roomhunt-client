import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LoginAcc = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
    confirmPassword:""
  })
  const formErr = (err) => {
    return ` ml-1 mb-2 rale duration-200 transition-all ease-linear text-xs text-red-500 font-[400] ${
      err ? "scale-y-100 h-auto" : "scale-y-0 h-0"
    } `;
  };

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    loginAcc(data)
    return 
  }
  const handleChange = () => {
    return 
  }

  return (
    <span className="flex flex-wrap justify-center pl-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap justify-start"
      >


    </form>
    </span>
  );
};

export default LoginAcc;
