const toggleCls =
  "w-5 bg-gray-200 transition-all duration-300 ease-linear h-1 rounded-md ";
export const rightIcon = (
  <span className=" h-5 w-5 flex flex-wrap align-center justify-center ">
    <span className="h-5 e-5 flex flex-wrap align-center justify-center ">
      <span
        className={`${toggleCls} h-5 border bg-gray-800 rotate-45 bg-transparent "
              }`}
      ></span>
      <span
        className={`${toggleCls} h-5 border -mt-4  rotate-45 bg-gray-200
           `}
      ></span>
    </span>
  </span>
);
