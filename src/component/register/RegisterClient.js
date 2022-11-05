import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../utility/Input";
import DateInput from "../utility/Date";
import FormErr from "../utility/FormErr";
import client from "../img/client.svg";
import { formHint } from "../utility/Text";
import { useForm } from "react-hook-form";
import BtnSubmit from "../btn/BtnSubmit";
import { ToastContainer } from "react-toastify";
import {errNotify} from '../utility/notify'
import { container, img, form, page1container } from "./style";
import { useRegisterState } from "../../state/register";

const RegisterClient = () => {
  const registerClient = useRegisterState((state) => state.registerClient);
  const navigate = useNavigate();
  const loading = useRegisterState((state) => state.loading);
  const err = useRegisterState((state) => state.err);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();
  const [data, setdata] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    birthday: ""
  })
  
  useEffect(()=>{
    if (err!==null) {
      errNotify(err)
    }
  },[err])

  const onSubmit = async() => {
    await registerClient(data, navigate);
  };
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  const handleDate = (e) => {
    setdata({ ...data, birthday: e.target.value });
  }



  return (
    <div className={container}>
      <img src={client} alt="client" className={img} />

      <span className={page1container}>
        <form onSubmit={handleSubmit(onSubmit)} className={form}>
          {formHint("full Name")}
          <Input
            type="text"
            placeholder={"Mario Luigue"}
            register={{ ...register("name", { required: true }) }}
            onChange={handleChange}
          />
          <FormErr text={"Full Name is required"} err={errors.name} />
          {formHint("birthday")}
    <span className="w-[50%]">
          <DateInput date={data.birthday} handleChange={handleDate} />
    </span>

          {formHint("email")}
          <Input
            type="email"
            placeholder={"email"}
            register={{ ...register("email", { required: true }) }}
            onChange={handleChange}
          />
          <FormErr text={"email is required"} err={errors.email} />

          <Input
            type="password"
            placeholder={"password"}
            register={{ ...register("password", { required: true }) }}
            onChange={handleChange}
          />
          <FormErr text={"password is required"} err={errors.password} />


          <Input
            type="password"
            placeholder={"confirmPassword"}
            register={{ ...register("confirmPassword", { required: true }) }}
            onChange={handleChange}
          />

          <BtnSubmit
            loading={loading}
            loadingTxt={"Registering"}
            text={"Submit"}
          />
        </form>
      </span>
      <ToastContainer />
    </div>
  );
};




export default RegisterClient





