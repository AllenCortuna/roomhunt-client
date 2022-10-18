import React from "react";

const LoginAcc = () => {
  const formErr = (err) => {
    return ` ml-1 mb-2 rale duration-200 transition-all ease-linear text-xs text-red-500 font-[400] ${
      err ? "scale-y-100 h-auto" : "scale-y-0 h-0"
    } `;
  };
  const submit = (loading) => {
    return `transition-all duration-200 ease-linear border-2 p-4 py-3 text-xs md:text-sm font-[500] shadow-md rounded-md mt-2 text-gray-600 mr-2 ml-auto ${
      loading
        ? "border-gray-500 text-gray-400 bg-none"
        : "bg-secondary border-secondary"
    } `;
  };

  return (
    <span className="flex flex-wrap justify-center pl-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap justify-start"
      >


    </form>
    </span>
  );
};

export default LoginAcc;
