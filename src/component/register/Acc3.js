import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../utility/Input";
import FormErr from "../utility/FormErr";
import {formHint} from "../utility/Text";
import { useForm } from "react-hook-form";
import BtnSubmit from "../btn/BtnSubmit";
import { form, page1container } from "./style";
import { useRegisterState } from "../../state/register";


const Acc3 = ({ handleChange, data }) => {
  const registerAcc = useRegisterState((state) => state.registerAcc);
  const navigate = useNavigate();
  const loading = useRegisterState((state) => state.loading);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();

  const onSubmit = () => {
    registerAcc(data, navigate);
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
      </span>
  );
};

export default Acc3;
