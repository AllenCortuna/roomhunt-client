import { useForm } from "react-hook-form";
import InputVal from "../utility/InputVal";
import DateInput from "../utility/Date";
import BtnSubmit from "../btn/BtnSubmit";
import Button from "../btn/Button";
import { BsFillGridFill } from "react-icons/bs";
import { roomStore } from "../../state/room";
import Option from "../utility/Option";
import MultipleImage from "../utility/MultipleImage";

const UploadForm = ({ data, setdata, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const loading = roomStore((state) => state.loading);

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleImg = (img) => {
    const oldImages = data.image; 
    //accept only 10 maximum image
    if (data.image.length <= 10) {
      const newImage = oldImages.concat(img);
      setdata({ ...data, image: newImage });
    } else {
      oldImages.shift()
      const newImage = oldImages.concat(img);
      setdata({ ...data, image: newImage });
    }
  };

  const handleOpt = (e) => {
    setdata({ ...data, bed: e.target.value });
  };

  const setAvailable = () => {
    setdata({ ...data, unavailableUntil: "" });
  };
  const handleCategory = (e) => {
    setdata({ ...data, category: e.target.value });
  };

  const handleAvailable = (e) => {
    setdata({ ...data, unavailableUntil: e.target.value });
  };

  const acc = JSON.parse(localStorage?.getItem("acc"))?.result?.category;

  // label
  const text = (txt) => {
    return (
      <>
        <p className="text-zinc-500 text-xs text-left w-full font-semibold">
          <BsFillGridFill className="inline -mt-0.5 mr-1" />
          {txt}
        </p>
      </>
    );
  };

  return (
    <form
      className="flex flex-wrap flex-col gap-3 w-full mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <MultipleImage handleImg={handleImg} data={data} setdata={setdata} />
      <span className=" mt-2 grid grid-cols-2 gap-1 gap-x-3">
        {text("Name")}
        <span></span>
        <InputVal
          value={data.name}
          type={"text"}
          placeholder={"Room Name/No."}
          register={{ ...register("name") }}
          onChange={handleChange}
        />
      </span>
      <span className=" mt-2 grid grid-cols-2 gap-1 gap-x-3">
        {text("Price")}
        {text("Bed")}
        <InputVal
          value={data.price}
          type={"number"}
          placeholder={
            acc === "hotel" || acc === "resort" ? "per night" : "per month"
          }
          register={{ ...register("price") }}
          onChange={handleChange}
        />
        <Option
          label={"Bed"}
          option={["1", "2", "3", "4", "5"]}
          handleOpt={handleOpt}
          value={data.bed}
        />
      </span>

      {/* Available date */}
      <span className="mt-2 grid grid-cols-2 gap-1 gap-x-3">
        {text("Room Type")}
        {text("Available Until")}
        <Option
          label={"Type"}
          option={["", "dorm", "resort", "hotel"]}
          handleOpt={handleCategory}
          value={data.category}
        />
        <DateInput
          handleChange={handleAvailable}
          date={data.unavailableUntil}
        />
      </span>

      {/* location  */}
      <span className="grid gap-1">
        {text("Room Location")}
        <InputVal
          value={data.location}
          type={"text"}
          placeholder={"Street Brgy. City, Province"}
          register={{ ...register("location", { required: false }) }}
          onChange={handleChange}
        />
      </span>

      {/* Description  */}
      <span className="grid gap-1">
        {text("Description")}
        <InputVal
          value={data.description}
          type={"text"}
          placeholder={"Room Description"}
          register={{ ...register("description", { required: false }) }}
          onChange={handleChange}
        />
      </span>
      <span className="w-full flex flex-row justify-between content-center h-10">
        <Button
          loading={null}
          color={"bg-amber-400 h-auto"}
          text={"Set Available"}
          onClick={setAvailable}
        />
        <BtnSubmit loading={loading} loadingTxt={"loading"} text={"Upload"} />
      </span>
    </form>
  );
};

export default UploadForm;
