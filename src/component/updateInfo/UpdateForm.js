import React from "react";
import InputVal from "../utility/InputVal";
import { errNotify } from "../utility/notify";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import Image from "../utility/Image";
import Option from "../utility/Option";


const UpdateForm = ({ data, handleChange,handleImg, handleOpt }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    errNotify("hello");
  };

  return (
    <form
      className="flex flex-col gap-3 bg-white p-4 shad rounded-lg"
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
          option={["", "resort", "hotel", "dorm"]}
          value={data.category}
        />
    
    </form>
  );
};

export default UpdateForm;
