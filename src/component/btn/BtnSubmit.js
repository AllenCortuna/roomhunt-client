import React from "react";

const BtnSubmit = ({ loading, text, loadingTxt }) => {
  return (
    <button
      type="submit"
      className={`transition-all duration-200 ease-linear border-2 p-4 py-3 text-xs md:text-sm font-[500] shad rounded-md mt-5 text-gray-600 mr-0 ml-auto flex flex-row gap-1 ${
        loading
          ? "border-gray-500 text-gray-400 bg-none"
          : "bg-secondary border-secondary"
      } `}
      disabled={loading}
    >
      {loading && (
        <span className="border-[.1rem] rounded-[.2rem] animate-spin bg-none border-zinc-500 w-4 h-4 my-auto"></span>
      )}
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
