export const container =
  "text-center p-4 bg-white w-[21rem] min-h-[20rem] rounded-md shadow h-auto mx-auto mt-[5rem]";
export const img = "w-20 m-auto my-2 drop-shadow-lg";
export const header = "font-semibold text-gray-500 text-md space-mono mx-auto";

// RegisterClient1
export const page1container = "flex flex-wrap flex-rows mt-10";
export const form = "flex flex-wrap gap-2 justify-center";
export const birthdaySpan =
  "min-w-[18rem] max-w-[23rem] flex justify-start mx-auto align-center";
export const birthdayText =
  "text-xs text-gray-400 inline font-[500] ml-1 mr-3 mt-1";
export const submit = (loading) => {
  return `p-4 py-3 text-xs md:text-sm font-[500] shadow-md rounded-md mt-2 text-gray-600 mr-2 ml-auto ${loading ? 'bg-gray-200 text-gray-300' : 'bg-secondary border-secondary'} `;
};
export const otpContainer = "grid grid-cols-1 items-center";
export const otpText = "mx-auto w-[15rem] text-gray-500 text-sm mt-5 mb-4 rale";
export const otpInput =
  "text-center h-10 w-8 border rounded-md space-mono text-gray-100 text-xl m-1 focus:outline-none bg-gray-800";
export const formInput =
  "outline-none text-gray-500 min-w-[18rem] max-w-[23rem] font-normal mx-auto border-gray-300 border p-2 rounded focus:outline-none focus:text-gray-500 focus:border-green transition-all ease-linear duration-300 text-xs md:text-sm";
export const numInput =
  "outline-none text-gray-500 w-[8rem] font-normal mx-auto border-gray-300 border p-2 rounded focus:outline-none focus:text-gray-500 focus:border-green transition-all ease-linear duration-300 text-xs md:text-sm";
