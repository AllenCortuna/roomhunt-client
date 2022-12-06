import React from "react";
import InputVal from "../utility/InputVal";
import { errNotify } from "../utility/notify";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import Image from "../utility/Image";
import Option from "../utility/Option";
import BtnSubmit from "../btn/BtnSubmit";
import { useRegisterState } from "../../state/register";

const UpdateForm = ({ data, handleChange, handleImg, handleOpt }) => {
  const id = JSON.parse(localStorage?.getItem("acc"))?.result?._id;
  const { register, handleSubmit } = useForm();
  const loading = useRegisterState((state) => state.loading);
  const patchAcc = useRegisterState((state) => state.patchAcc);

  const onSubmit = () => {
    if (data.image === "") {
      errNotify("Business Image required");
    } else if (data.businessName === "") {
      errNotify("Business Name required");
    } else if (data.location === "") {
      errNotify("Location required");
    } else if (data.email === "") {
      errNotify("Email required");
    } else if (data.contact === "") {
      errNotify("Contact required");
    } else if (data.category === "" || data.category === "property type") {
      errNotify("Change Property Type");
    } else {
      patchAcc(data, id);
    }
  };

  return (
    <form
      className="flex flex-col gap-3 bg-white p-5 shad rounded-lg max-w-[24rem] min-w-[21rem] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ToastContainer />
      <Image handleImg={handleImg} data={data} />
      <InputVal
        placeholder={"Business Name"}
        type={"text"}
        value={data.businessName}
        register={{ ...register("businessName", { required: true }) }}
        onChange={handleChange}
      />

      <InputVal
        placeholder={"Owner Name"}
        type={"text"}
        value={data.ownerName}
        register={{ ...register("ownerName", { required: true }) }}
        onChange={handleChange}
      />

      <InputVal
        placeholder={"Location"}
        type={"text"}
        value={data.location}
        register={{ ...register("location", { required: true }) }}
        onChange={handleChange}
      />

      <InputVal
        placeholder={"Email"}
        type={"email"}
        value={data.email}
        register={{ ...register("email", { required: true }) }}
        onChange={handleChange}
      />

      <InputVal
        placeholder={"Contact"}
        type={"number"}
        value={data.contact}
        register={{
          ...register("contact", {
            minLength: 11,
            maxLength: 11,
            required: true,
          }),
        }}
        onChange={handleChange}
      />

      <Option
        label={"Category"}
        handleOpt={handleOpt}
        option={["property type", "resort", "hotel", "dorm"]}
        value={data.category}
      />

      <BtnSubmit loading={loading} text={"Submit"} loadingTxt={"Processing"} />
    </form>
  );
};

export default UpdateForm;
