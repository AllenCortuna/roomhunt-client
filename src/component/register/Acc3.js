import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../utility/Input";
import FormErr from "../utility/FormErr";
import {formHint} from "../utility/Text";
import { useForm } from "react-hook-form";
import BtnSubmit from "../btn/BtnSubmit";
import { form, page1container } from "./style";
import { useRegisterState } from "../../state/register";
import { ToastContainer } from "react-toastify";
import {errNotify} from '../utility/notify'


const Acc3 = ({ handleChange, data }) => {
  const registerAcc = useRegisterState((state) => state.registerAcc);
  const navigate = useNavigate();
  const loading = useRegisterState((state) => state.loading);
  const err = useRegisterState((state) => state.err);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();
  
  useEffect(()=>{
    if (err!==null) {
      errNotify(err)
    }

  },[err])

  const onSubmit = async() => {
    await registerAcc(data, navigate);
  };


  return (
      <span className={page1container}>
        <form onSubmit={handleSubmit(onSubmit)} className={form}>
          {formHint("Address")}
          <Input
            type="text"
            placeholder={"Street"}
            register={{ ...register("street", { required: true }) }}
            onChange={handleChange}
          />
          <FormErr text={"Street is required"} err={errors.street} />

          <Input
            type="text"
            placeholder={"Brgy"}
            register={{ ...register("brgy", { required: true }) }}
            onChange={handleChange}
          />
          <FormErr text={"Brgy is required"} err={errors.brgy} />

          <Input
            type="text"
            placeholder={"City/Town"}
            register={{ ...register("city", { required: true }) }}
            onChange={handleChange}
          />
          <FormErr text={"City is required"} err={errors.city} />

          <Input
            type="text"
            placeholder={"Province"}
            register={{ ...register("province", { required: true }) }}
            onChange={handleChange}
          />
          <FormErr text={"Province is required"} err={errors.province} />

        <BtnSubmit
          loading={loading}
          loadingTxt={"Registering"}
          text={"Submit"}
        />
        </form>
      <ToastContainer />
      </span>
  );
};

export default Acc3;
