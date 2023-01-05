import React from "react";
import { useForm } from "react-hook-form";
import { form, page1container } from "./style";
import Input from "../utility/Input";
import BtnSubmit from "../btn/BtnSubmit";
import { formHint } from "../utility/Text";
import { errNotify } from "../utility/notify";
import { ToastContainer } from "react-toastify";
import ProcessIndicator from "./ProcessIndicator";
import TermsAgree from "../utility/TermsAgree";

const Acc1 = ({ setPage, page, handleChange, data }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    if (!data.email || !data.password) {
      errNotify("Complete all info");
    } else if (data.password?.length < 8) {
      errNotify("password must be 8 or more characters");
    } else if (data.password !== data.confirmPassword) {
      errNotify("Password not match!");
    } else {
      setPage(page + 1);
    }
  };

  // console.log(watch("example"));
  return (
    <span className={page1container}>
      <ToastContainer />
      <hr className="my-4" />
      <form onSubmit={handleSubmit(onSubmit)} className={form}>
        {formHint("Email")}

        <Input
          type="email"
          placeholder={"Email"}
          register={{ ...register("email", { required: false }) }}
          onChange={handleChange}
        />

        <Input
          type="password"
          placeholder={"Password"}
          register={{
            ...register("password", {
              required: false,
            }),
          }}
          onChange={handleChange}
        />

        <Input
          type="password"
          placeholder={"Confirm Password"}
          register={{ ...register("confirmPassword", { required: false }) }}
          onChange={handleChange}
        />
        <ProcessIndicator page={1} />

        <BtnSubmit loading={false} loadingTxt={""} text={"next"} />
      </form>
      <TermsAgree />
    </span>
  );
};

export default Acc1;
