import React from "react";
import animate from '../img/animate.svg'


const BtnSubmit = ({ loading, text, loadingTxt }) => {
  
  return (
    <button
      type="submit"
      className={`transition-all duration-200 ease-linear border-2 p-6 py-3 text-xs md:text-sm font-[500] shad rounded-md mr-0 ml-auto flex flex-row gap-1 capitalized ${
        loading
          ? "border-gray-500 text-gray-400 bg-none px-2 py-3"
          : "bg-zinc-700 border-zinc-200 text-white"
      } `}
      disabled={loading}
    >
      {loading && (
        <img src={animate} alt={"https://loading.io/spinner/ellipsis/-speaking-discussion-text-ellipsis-typing-move"} className="w-6 h-4 my-auto"/>)}
      {loading ? loadingTxt : text}
    </button>
  );
};

BtnSubmit.defaultProps = {
  text: "submit",
  loadingTxt: "Processing",
  loading: null
}


export default BtnSubmit;
