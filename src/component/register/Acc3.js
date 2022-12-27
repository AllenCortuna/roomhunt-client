/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../utility/Input";
import { formHint } from "../utility/Text";
import { useForm } from "react-hook-form";
import BtnSubmit from "../btn/BtnSubmit";
import { form, page1container } from "./style";
import { useRegisterState } from "../../state/register";
import { ToastContainer } from "react-toastify";
import { errNotify } from "../utility/notify";
import ProcessIndicator from "./ProcessIndicator";

const Acc3 = ({ handleChange, data }) => {
  const registerAcc = useRegisterState((state) => state.registerAcc);
  const navigate = useNavigate();
  const loading = useRegisterState((state) => state.loading);
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async () => {
    if (!data.street || !data.brgy || !data.city || !data.province) {
      errNotify("Complete all the Info !");
    } else {
      await registerAcc(data, navigate);
    }
  };

  return (
    <span className={page1container}>
      <form onSubmit={handleSubmit(onSubmit)} className={form}>
        {formHint("Address")}
        <Input
          type="text"
          placeholder={"Street"}
          register={{ ...register("street", { required: false }) }}
          onChange={handleChange}
        />

        <Input
          type="text"
          placeholder={"Brgy"}
          register={{ ...register("brgy", { required: false }) }}
          onChange={handleChange}
        />

        <Input
          type="text"
          placeholder={"City/Town"}
          register={{ ...register("city", { required: false }) }}
          onChange={handleChange}
        />

        <Input
          type="text"
          placeholder={"Province"}
          register={{ ...register("province", { required: false }) }}
          onChange={handleChange}
        />

        <ProcessIndicator page={3}/>
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
